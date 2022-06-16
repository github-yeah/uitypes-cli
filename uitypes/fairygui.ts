import { xml2js, Element } from 'xml-js';
import { existsSync, readFileSync } from 'fs';
import { log } from './log';
import { format as prettierFormat } from 'prettier';

/**
 * @description XML
 * @author xfy
 */
export namespace fairygui.Config {
  /**
   * @description 加载配置文件
   * @param {string} file 配置文件路径
   * @returns {(Element | undefined)}
   */
  export function load(file: string): Element | undefined {
    if (existsSync(file) === false) {
      log(`[xml文件不存在！] [file=${file}]`);
      return undefined;
    }
    const fileContent = readFileSync(file).toString();
    const result = xml2js(fileContent) as Element;
    return result;
  }

  /**
   * @description 包根节点
   * @interface PackageRootNode
   * @extends {Element}
   */
  export interface PackageRootNode extends Element {
    /** @description root tag name*/
    readonly name: 'packageDescription';

    /** @description 组件属性*/
    readonly attributes?: Readonly<{
      /** @description 包id*/
      id: string;
    }>;
  }

  /**
   * @description 包发布节点
   * @interface PackagePublishNode
   * @extends {Element}
   */
  export interface PackagePublishNode extends Element {
    /** @description publish tag name*/
    readonly name: 'publish';

    /** @description 组件属性*/
    readonly attributes?: Readonly<{
      /** @description 发布名称*/
      name?: string;
    }>;
  }

  /**
   * @description 包内组件列表节点
   * @interface PackagePublishNode
   * @extends {Element}
   */
  export interface PackageResourcesNode extends Element {
    /** @description publish tag name*/
    readonly name: 'resources';

    /** @description 组件列表*/
    readonly elements?: (Element & {
      /** @description root tag name*/
      readonly name: string;

      /** @description 组件属性*/
      readonly attributes: Readonly<{
        /** @description 组件id  */
        id: string;

        /** @description 组件配置文件名称（含扩展名）*/
        name: string;

        /** @description 组件相对路径（UI包目录内的相对领）*/
        path: string;

        /** @description 组件是否被导出 */
        exported?: string;
      }>;
    })[];
  }

  /**
   * @description 组件根节点
   * @interface ComponentRootNode
   * @extends {Element}
   */
  export interface ComponentRootNode extends Element {
    /** @description root tag name*/
    readonly name: 'component';

    /** @description 组件属性*/
    readonly attributes?: Readonly<{
      /** @description 组件扩展类（使用时需要转换成`fairgui.GComponent`）*/
      extention?: string;
    }>;
  }

  /**
   * @description 组件内属性节点
   * @interface ComponentAttributeNode
   * @extends {Element}
   */
  export interface ComponentAttributeNode extends Element {
    /** @description 组件扩展类型名（使用时需要转换成fairgui.xxxxx）*/
    readonly name: string;

    /** @description 组件属性信息*/
    readonly attributes: Readonly<{

      /** @description 属性名称*/
      name?: string;

      /**
       * @description 引用的自定义组件类型对应的组件id
       * - 属性类型为自定义组件时，可以通过此id查找自定义组件具体类型
       * - 如果不存在则使 `ComponentAttributeNode['name']` - `组件扩展类型名`
       * */
      src?: string;

      /**
       * @description 引用的自定义组件类型所属包对应的包id
       * - 如果不存则在本包内查找具体组件类型
       * */
      pkg?: string;
    }>;
  }


}








/** @description /////////////////////////////////////// Utils ////////////////////////////////// */
export namespace fairygui {
  /** @description 匹配无用名字（fariygui自动生成的名字或者纯数字名字）*/
  const useless_name_reg = /^(\-|[0-9]|n[0-9]*$)/;    // 数字或负号开头+n开头数字结尾

  /** @description 名称是否合法*/
  export const isLegalName = (name: string) => name.length > 0 && !useless_name_reg.test(name);

  // 不能使用通用算法转换的组件类型映射
  const FGUITypeMapping: Record<string, string | undefined> = {
    text: 'fairygui.GTextField',
    richtext: 'fairygui.GRichTextField',
    progressar: 'fairygui.GProgressBar',
    textinput: 'fairygui.GTextInput',
    scrollbar: 'fairygui.GScrollBar',
    movieclip: 'fairygui.GMovieClip'
  };

  /**
   * @description 类型映射
   * @author xfy
   * @param {string} type
   * @returns {string}
   */
  export function typeMapping(type: string): string {
    const existing = FGUITypeMapping[type];
    if (existing !== undefined) {
      return existing;
    }

    if (type.length < 1) {
      return type;
    }
    return `fairygui.G${type.substr(0, 1).toUpperCase()}${type.substr(1)}`
  }

  /**
   * @description 相对路径转换成引用路径
   * @author xfy
   * @export
   * @param {string} path
   * @returns {string}
   */
  export function toReferencePath(path: string): string {
    return path.replace(/^(\/|\\)+|(\/|\\)+$/g, '').replace(/\/|\\/g, '.');
  }



  /**
   * @description 代码格式化
   * @author xfy
   * @export
   * @param {string} code
   * @returns {string}
   */
  export function format(code: string): string {
    return prettierFormat(code, { filepath: '.ts' })
  }

  /**@description header*/
  export const HEADER = `type __UIComponent<Base, Children, Controllers extends string = string, Transitions extends string = string> = Base & {
getChild<Key extends keyof Children>(name: Key, explicitType: true): Children[Key];
getController(name: Controllers): fairygui.Controller;
getTransition(transName: Transitions): fairygui.Transition;
};`;


}

