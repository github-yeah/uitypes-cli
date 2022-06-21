import { basename } from 'path';
import { fairygui } from './fairygui';
import { log } from './log';

/**
 * @description Controller
 * @author xfy
 * @interface Controller
 */
interface Controller {
  name: 'controller';
  attributes: {
    name: string;
  };
}

/**
 * @description Transition
 * @author xfy
 * @interface Transition
 */
interface Transition {
  name: 'transition';
  attributes: {
    name: string;
  };
}

/**
 * @description Child
 * @author xfy
 * @interface Child
 */
interface Child {
  name: string;
  attributes: {
    name: string;
    src?: string;
    pkg?: string;
  };
}

/**
 * @description UIComponent
 * @author xfy
 * @export
 * @interface UIComponent
 */
export interface UIComponent {
  name: string;
  extention: string;
  children?: Child[];
  controllers?: Controller[];
  transitions?: Transition[];
}

/**@description UIComponent */
export namespace UIComponent {
  /**
   * @description 加载组件
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
    /**@description Children */
    let children = '';
    /**@description Controller names type */
    let controllers: string | undefined = undefined;
    /**@description Transition names type*/
    let transitions: string | undefined = undefined;

    rootConfig.elements?.forEach((e) => {
      switch (e.name) {
        case 'controller':
          const controllerName = (e as Child).attributes.name;
          if (controllerName !== undefined) {
            controllers = controllers === undefined ? `'${controllerName}'` : `${controllers} | '${controllerName}'`;
          }
          break;
        case 'transition':
          const transitionName = (e as Child).attributes.name;
          if (transitionName !== undefined) {
            transitions = transitions === undefined ? `'${transitionName}'` : `${transitions} | '${transitionName}'`;
          }
          break;
        case 'displayList':
          if (e.elements === undefined) {
            return;
          }
          children += compileChildren(e.elements as Child[]);
          break;
      }
    });
    controllers = controllers ?? 'string';
    transitions = transitions ?? 'string';
    children = `{${children}}`;

    // 解析组件扩展类型
    const rootAttributes = rootConfig.attributes as undefined | { extention?: string };
    const tagname = rootAttributes?.extention ?? rootConfig.name ?? 'component';
    const supertype = fairygui.toFairyguiType(tagname);
  }

  /**
   * @description 编译组件
   * @export
   * @param {string} file 组件配置文件路径
   * @param {boolean} [format] 是否格式化代码
   * @return {string}
   */
  export function compile(file: string, format?: boolean): string {
    // 解析组件名
    const name = basename(file, '.xml');
    if (fairygui.isValidName(name) === false) {
      log(`[组件解析失败！] [组件名称不合规] [file=${file}]`);
      return '';
    }

    // 读取自定义组件
    const fileElement = fairygui.Config.load(file);
    if (!fileElement) {
      log(`[组件解析失败！] [组件配置文件不存在] [file=${file}]`);
      return '';
    }
    const rootConfig = fileElement.elements?.find((e) => e.name === 'component');
    if (rootConfig === undefined) {
      log(`[组件解析失败！] [组件配置文件格式不合规] [file=${file}]`);
      return '';
    }

    // 解析组件属性列表
    /**@description Children */
    let children = '';
    /**@description Controller names type */
    let controllers: string | undefined = undefined;
    /**@description Transition names type*/
    let transitions: string | undefined = undefined;

    rootConfig.elements?.forEach((e) => {
      switch (e.name) {
        case 'controller':
          const controllerName = (e as Child).attributes.name;
          if (controllerName !== undefined) {
            controllers = controllers === undefined ? `'${controllerName}'` : `${controllers} | '${controllerName}'`;
          }
          break;
        case 'transition':
          const transitionName = (e as Child).attributes.name;
          if (transitionName !== undefined) {
            transitions = transitions === undefined ? `'${transitionName}'` : `${transitions} | '${transitionName}'`;
          }
          break;
        case 'displayList':
          if (e.elements === undefined) {
            return;
          }
          children += compileChildren(e.elements as Child[]);
          break;
      }
    });
    controllers = controllers ?? 'string';
    transitions = transitions ?? 'string';
    children = `{${children}}`;

    // 解析组件扩展类型
    const rootAttributes = rootConfig.attributes as undefined | { extention?: string };
    const tagname = rootAttributes?.extention ?? rootConfig.name ?? 'component';
    const supertype = fairygui.toFairyguiType(tagname);

    // 组合代码
    const code = fairygui.toComponentTypeCode(name, supertype, children, controllers, transitions);
    if (format) {
      return fairygui.format(code);
    }
    return code;
  }

  /**
   * @description 编译子显示对象列表
   * @author xfy
   * @param {Child[]} elements
   * @returns {string}
   */
  function compileChildren(elements: Child[]): string {
    //子显示对象Record - {属性名: 属性类型}
    const children: Record<string, string | undefined> = {};
    let code = '';
    elements.forEach(({ name: tagName, attributes }) => {
      // 解析显示对象属性名
      const name = attributes.name;
      if (name === undefined || children[name] !== undefined || !fairygui.isValidName(name)) {
        return;
      }

      // // 解析非自定义组件属性
      // if (tagName !== 'component' || !attributes.fileName?.length) {
      //   const type = fairygui.toFairyguiType(tagName);
      //   children[name] = type;
      //   code = `${code}${name}: ${type};`;
      //   return;
      // }

      // // 解析自定义组件属性
      // const pkg = attributes.pkg;
      // const ref = fairygui.toRef(attributes.fileName.replace('.xml', ''));
      // const type = pkg?.length ? `_${pkg}.${ref}` : ref; // 以包id为命名空间别名，需加前缀`_`，防止数字开头的包id
      // children[name] = type;
      // code = `${code}${name}: ${type};`;
    });
    return code;
    // return JSON.stringify(children).replace(/\"/g, '');
  }
}
