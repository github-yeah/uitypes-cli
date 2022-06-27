import { xml2js, Element } from 'xml-js';
import { existsSync, readFileSync } from 'fs';
import { log } from './log';
import { tagTypesMapping } from '../configs/config.fairygui';

export namespace fairygui {
  /** @description 匹配无用名字（fariygui自动生成的名字或者纯数字名字）*/
  const useless_name_reg = /^(\-|[0-9]|n[0-9]*$)/; // 数字或负号开头+n开头数字结尾

  /** @description 名称是否合法*/
  export const isValidName = (name: string) => {
    return name.length > 0 && !useless_name_reg.test(name);
  };

  // 不能使用通用算法转换的组件类型映射
  const typeMapping: Record<string, string | undefined> = tagTypesMapping;

  /**
   * @description 转换成`fairygui`内置类型
   * @author xfy
   * @param {string} type
   * @returns {string}
   */
  export function toFairyguiType(type: string): string {
    const existing = typeMapping[type];
    if (existing !== undefined) {
      return existing;
    }

    if (type.length < 1) {
      return type;
    }
    return `fairygui.G${type.substr(0, 1).toUpperCase()}${type.substr(1)}`;
  }

  /**
   * @description 相对路径转换成引用路径
   * @author xfy
   * @export
   * @param {string} path
   * @returns {string}
   */
  export function toRef(path: string): string {
    return path.replace(/^(\/|\\)+|(\/|\\)+$/g, '').replace(/\/|\\/g, '.');
  }

  /**@description 组件类型*/
  export const ComponentTypeCode =
    'type __UIComponent<Base, Children, Controllers extends string = string, Transitions extends string = string> = Base & {getChild<Key extends keyof Children>(name: Key, explicitType: true): Children[Key];getController(name: Controllers): fairygui.Controller;getTransition(transName: Transitions): fairygui.Transition;};';

  /**
   * @description 组件类型代码
   * @author xfy
   * @export
   * @returns {string}
   */

  /**@description 生成组件类型代码*/
  export function toComponentTypeCode(
    name: string,
    supertype: string,
    children: string,
    controllers: string,
    transitions: string
  ): string {
    return `type ${name} = __UIComponent<${supertype}, ${children}, ${controllers}, ${transitions}>;`;
  }
}

/**
 * @description XML Config
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
}
