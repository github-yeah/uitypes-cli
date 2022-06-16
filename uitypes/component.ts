import { basename } from "path";
import { fairygui } from "./fairygui";
import { log } from "./log";
import { UIPackage } from "./package";

/**@description 组件内子属性节点*/
type AttributeNode = fairygui.Config.ComponentAttributeNode;

/**
 * @description UI Component
 * @author xfy
 * @export
 * @interface UIComponent
 */
export interface UIComponent {
  /**@description 组件名（类名） */
  readonly name: string;

  /** @description 组件扩展类型 - fairygui内置类型，比如：fairygui.GComponent*/
  readonly extention: string;

  /**@description 显示列表 */
  readonly displayList?: readonly AttributeNode[];

  /**@description Controller list*/
  readonly controllers?: readonly AttributeNode[];

  /**@description Transition list*/
  readonly transitions?: readonly AttributeNode[];
}

/**
 * @description 加载Component组件
 * @author xfy
 * @export
 * @param {string} file   组件路径
 * @returns {UIComponent | undefined}
 */
export function loadUIComponent(file: string): UIComponent | undefined {
  // 读取自定义组件
  const fileElement = fairygui.Config.load(file);
  if (!fileElement) {
    log(`[组件配置文件不存在！] [file=${file}]`);
    return undefined;
  }
  const rootElement = fileElement.elements?.find(e => e.name === 'component') as fairygui.Config.ComponentRootNode | undefined;
  if (!rootElement) {
    log(`[组件配置文件解析失败！] [file=${file}]`);
    return undefined;
  }

  // 解析组件名称
  const name = basename(file, '.xml');

  // 解析组件扩展类型
  const extention = fairygui.typeMapping(rootElement.attributes?.extention ?? rootElement.name);

  // 空组件
  if (rootElement.elements === undefined) {
    return { name, extention };
  }

  // =======  解析组件属性列表 ========
  let displayList: AttributeNode[] = [];
  let controllers: AttributeNode[] | undefined = undefined;
  let transitions: AttributeNode[] | undefined = undefined;

  for (const e of rootElement.elements) {
    switch (e.name) {
      case 'displayList':
        if (e.elements === undefined) {
          return;
        }
        const existing: Record<string, true | undefined> = {};
        (e.elements as AttributeNode[]).forEach(element => {
          const name = element.attributes.name;
          // 剔除重复名字和不合规的名字（比如：数字开头的或fairygui自动生成的名字: n1, n...999）
          if (name && existing[name] !== true && fairygui.isLegalName(name)) {
            existing[name] = true;
            displayList.push(element)
          }
        });
        break;
      case 'controller':
        if (e.attributes === undefined) {
          return;
        }
        controllers = controllers ?? [];
        controllers.push(e as AttributeNode)
        break;
      case 'transition':
        if (e.attributes === undefined) {
          return;
        }
        transitions = transitions ?? [];
        transitions.push(e as AttributeNode)
        break;
    }
  }

  // 显示列表为空的不导出组件类型，如果判断controller和transition，请打开后续代码
  // if (!displayList.length && !controllers?.length && !transitions?.length) {
  if (displayList.length === 0) {
    return { name, extention };
  }

  return {
    name,
    extention,
    displayList,
    controllers,
    transitions
  };
}

/**
 * @description 编译UIComponent
 * @author xfy
 * @export
 * @param {UIComponent} component UIComponent
 * @param {UIPackage} hostPackage 组件所属UIPackage
 * @param {(Record<string, UIPackage | undefined>)} packageMap 项目完整包映射列表
 * @param {boolean} [format]  是否格式化代码
 * @returns {string}
 */
export function componentEncoding(component: UIComponent, hostPackage: UIPackage, packageMap: Record<string, UIPackage | undefined>, format?: boolean): string {
  // 编码子显示对象
  const children = component.displayList?.map(({ name: tagname, attributes }) => {
    const { name, src, pkg } = attributes;
    if (name === undefined) {
      // 属性未命名，剔除属性
      return '';
    }

    // 解析内置类型的属性
    if (src === undefined || tagname !== 'component') {
      return `${name}: ${fairygui.typeMapping(tagname)};`;
    }

    // 解析自定义类型的属性
    const referencePackage = pkg === undefined ? hostPackage : packageMap[pkg];
    const referenceType = referencePackage?.componentTypeMap[src];
    if (referenceType === undefined) {
      // 引用的组件类型不存在，剔除属性
      return '';
    }
    return `${name}: ${referenceType};`;
  }).join(' ') ?? '';

  // 解析controllers
  const controllers = component.controllers?.reduce((code, { attributes }) => {
    if (attributes.name === undefined) {
      return code;
    }
    return `${code} | '${attributes.name}'`
  }, '') ?? 'string';

  // 解析transitions
  const transitions = component.transitions?.reduce((code, { attributes }) => {
    if (attributes.name === undefined) {
      return code;
    }
    return `${code} | '${attributes.name}'`
  }, '') ?? 'string';

  // 组合代码
  const code = `type ${component.name} = __UIComponent<${component.extention}, {${children}}, ${controllers}, ${transitions}>;`;
  if (format) {
    return fairygui.format(code);
  }
  return code;
}


