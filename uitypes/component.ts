import { basename } from 'path';
import { fairygui } from './fairygui';
import { log } from './log';

/**
 * @description Attribute
 * @author xfy
 * @interface Attribute
 */
interface Attribute {
  /** @description element tag name*/
  readonly name: string; 
  readonly attributes: Readonly<{
    /** @description 属性name*/
    name: string;
    /** @description 属性引用的组件id*/
    src?: string;
    /** @description 属性引用的组件所在包的id*/
    pkg?: string;
  }>;
}

/**
 * @description UIComponent
 * @author xfy
 * @export
 * @interface UIComponent
 */
export interface UIComponent {
  readonly name: string;
  readonly supertype: string;
  readonly exportable: boolean;
  readonly attributes: readonly Attribute[];
}

/**@description UIComponent */
export namespace UIComponent {
  /**
   * @description 加载`UIComponent`
   * @export
   * @param {string} file 组件配置文件路径
   * @return {string}
   */
  export function load(file: string): UIComponent | undefined {
    // 解析组件名
    const name = basename(file, '.xml');
    if (fairygui.isValidName(name) === false) {
      log(`[组件解析失败！] [组件名称不合规] [file=${file}]`);
      return undefined;
    }

    // 读取自定义组件
    const fileConfig = fairygui.Config.load(file);
    if (!fileConfig) {
      log(`[组件解析失败！] [组件配置文件不存在] [file=${file}]`);
      return undefined;
    }
    const rootConfig = fileConfig.elements?.find((e) => e.name === 'component');
    if (rootConfig === undefined) {
      log(`[组件解析失败！] [组件配置文件格式不合规] [file=${file}]`);
      return undefined;
    }

    // 解析组件属性列表
    const attributes: Attribute[] = [];
    const existChildren: Record<string, true | undefined> = {};
    rootConfig.elements?.forEach((e) => {
      switch (e.name) {
        case 'controller':
        case 'transition':
          attributes.push(e as Attribute);
          break;
        case 'displayList':
          const children = e.elements as Attribute[] | undefined;
          if(children === undefined) {
            return;
          }
          children.forEach(child => {
            const n = child.attributes.name;
            if(existChildren[n] === true || fairygui.isValidName(n) === false) {
              return;
            } 
            existChildren[n] = true;
            attributes.push(child);
          });
          break;
      }
    });

    // 是否需要导出
    const exportable = attributes.length > 0;

    // 解析组件扩展类型
    const extention = rootConfig.attributes?.extention as string | undefined;
    const tagname = extention ?? rootConfig.name ?? 'component';
    const supertype = fairygui.toFairyguiType(tagname);
    return {
      name, 
      supertype,
      exportable, 
      attributes
    };
  }

  /**
   * @description 编译
   * @export
   * @param {UIComponent} component 组件
   * @param {((componentID: string, packageID?: string) => string | undefined)} getType 根据组件id和包id获取组件类型
   * @param {boolean} [format] 是否格式化代码
   * @return {*}  {string}
   */
  export function compile(component: UIComponent, getType: (componentID: string, packageID?: string) => string | undefined, format?: boolean): string;
  /**
   * @description 编译
   * @export
   * @param {string} file 组件配置文件路径
   * @param {((componentID: string, packageID?: string) => string | undefined)} getType 根据组件id和包id获取组件类型
   * @param {boolean} [format] 是否格式化代码
   * @return {*}  {string}
   */
  export function compile(file: string, getType: (componentID: string, packageID?: string) => string | undefined, format?: boolean): string;
  export function compile(data: string | UIComponent, getType: (componentID: string, packageID?: string) => string | undefined, format?: boolean): string {
    const component = typeof data === 'string' ? load(data) : data;
    if(component === undefined) {
      return '';
    }

    // 解析组件属性
    let children = '';
    let controllers: string | undefined = undefined;
    let transitions: string | undefined = undefined;
    component.attributes.forEach(({name: tag, attributes}) => {
      const {name, pkg, src} = attributes;
      switch(tag) {
        case 'controller':
          controllers = controllers === undefined ? `'${name}'` : `${controllers} | '${name}'`;
          break;
          case 'transition':
          transitions = transitions === undefined ? `'${name}'` : `${transitions} | '${name}'`;
        break;
        case 'component':
          if(src === undefined) {
            const type = fairygui.toFairyguiType(tag);
            children = `${children}${name}: ${type};`;
            return;
          }
          const ref = getType(src, pkg);
          if(ref === undefined) {
            // 找不到类型说明组件有错误，不予导出
            return;
          }
          children = `${children}${name}: ${ref};`;
          break;
        default:
          const type = fairygui.toFairyguiType(tag);
          children = `${children}${name}: ${type};`;
          break;
      }
    });
    children = `{${children}}`;
    controllers = controllers ?? 'string';
    transitions = transitions ?? 'string';
    const {name, supertype} = component;
    const code = fairygui.toComponentTypeCode(name, supertype, children, controllers, transitions);
    if (format) {
      return fairygui.format(code);
    }
    return code;
  }
}
