import { join } from 'path';
import { componentEncoding, loadUIComponent, UIComponent } from "./component";
import { fairygui } from './fairygui';
import { log } from './log';
import { statSync } from 'fs';

/**
 * @description UIPackage
 * @author xfy
 * @interface UIPackage
 */
export interface UIPackage {
  /**
   * @description id
   * @type {string}
   */
  readonly id: string;

  /**
   * @description 包名
   * @type {string}
   */
  readonly packagename: string;

  /**
   * @description 发布名称
   * @type {string}
   */
  readonly publishname: string;

  /**
   * @description 包内组件类型l列表映射 {component-id: 组件类型}
   * @type {(Readonly<Record<string, string | undefined>>)} 
   */
  readonly componentTypeMap: Readonly<Record<string, string | undefined>>;
  /**
   * @description 按照包内`相对路径（命名空间）`分组的组件树
   * - {namespace: UIComponent[]}
   * @type {(Readonly<Record<string, UIComponent[] | undefined>>)} 
   */
  readonly componentsTree: Readonly<Record<string, UIComponent[] | undefined>>;
}

/**
 * @description 加载`UIPackage`
 * @author xfy
 * @export
 * @param {string} packagename  包名
 * @param {string} basePath 项目根目录
 * @returns {(UIPackage | undefined)}
 */
export function loadUIPackage(packagename: string, basePath: string): UIPackage | undefined {
  const packagePath = join(basePath, packagename);
  if (statSync(packagePath).isDirectory() === false) {
    // 过滤包文件夹
    return undefined;
  }

  const file = join(packagePath, 'package.xml');
  const fileElement = fairygui.Config.load(file);
  if (!fileElement) {
    log(`[包配置文件不存在！] [file=${file}]`);
    return undefined;
  }

  const pkgRootElement = fileElement.elements?.find(e => e.name === 'packageDescription') as fairygui.Config.PackageRootNode | undefined;
  if (!pkgRootElement || !pkgRootElement.elements || !pkgRootElement.attributes) {
    log(`[包件配置文件解析失败！] [file=${file}]`);
    return undefined;
  }

  // 解析包id
  const id = pkgRootElement.attributes.id;

  // 解析包发布名
  const publishnode = pkgRootElement.elements.find(e => e.name === 'publish') as fairygui.Config.PackagePublishNode | undefined;
  const publishname = publishnode?.attributes?.name ?? packagename;

  // 读取包组件列表
  const resourcesNode = pkgRootElement.elements.find(e => e.name === 'resources') as fairygui.Config.PackageResourcesNode | undefined;
  if (!resourcesNode?.elements?.length) {
    return undefined;
  }

  // 组件类型映射表
  const componentTypeMap: Record<string, string | undefined> = {};
  // 组件命名空间映射表
  const componentsTree: Record<string, UIComponent[] | undefined> = {};
  resourcesNode.elements.forEach(({ name, attributes }) => {
    // 解析非自定义组件, 直接使用内置扩展类型
    if (name !== 'component') {
      const type = fairygui.typeMapping(name);
      componentTypeMap[attributes.id] = type;
      return;
    }

    // 解析自定义组件
    const filePath = join(packagePath, attributes.path, attributes.name);
    const component = loadUIComponent(filePath);
    if (!component) {
      // 组件加载失败，不放入类型映射列表内，使用此类型的属性不应该存在
      return;
    }

    // 解析空组件，使用内置类型
    if (!component.displayList?.length) {
      componentTypeMap[attributes.id] = component.extention;
      return;
    }

    // 解析自定义包类型
    const ns = fairygui.toReferencePath(attributes.path);
    const fullNS = ns.length > 0 ? `${packagename}.${ns}.${component.name}` : `${packagename}.${component.name}`;
    componentTypeMap[attributes.id] = fullNS;

    // 按命名空间存储待待导出的自定义组件
    let components = componentsTree[ns];
    if (!components) {
      components = [];
      componentsTree[ns] = components;
    }
    components.push(component);
  });

  return {
    id,
    packagename,
    publishname,
    componentTypeMap,
    componentsTree
  };
}

/**
 * @description 编译UIPackage
 * @author xfy
 * @export
 * @param {UIPackage} pkg UIPackage
 * @param {(Readonly<Record<string, UIPackage | undefined>>)} packageMap 项目UI包映射列表 {package-id: UIPackage}
 * @param {boolean} [format]  是否格式化代码
 * @returns {string}
 */
export function packageEncoding(pkg: UIPackage, packageMap: Readonly<Record<string, UIPackage | undefined>>, format?: boolean): string {
  const { componentsTree } = pkg;
  const namespaceCodeList: string[] = [];
  for (const ns in componentsTree) {
    const components = componentsTree[ns];
    // 编译同命名空间下的组件列表代码（未格式化）
    const componentsCode = components?.map(component => componentEncoding(component, pkg, packageMap)).join(' ') ?? '';
    // 命名空间为空的话表示是包命名空间的直系子组件
    namespaceCodeList.push(ns.length === 0 ? componentsCode : `namespace ${ns} {${componentsCode}}`);
  }

  const code = `namespace ${pkg.packagename} {${namespaceCodeList.join(' ')}}`
  if (format) {
    return fairygui.format(code);
  }
  return code;
}