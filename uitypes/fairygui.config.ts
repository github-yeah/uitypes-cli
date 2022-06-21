import { readFileSync } from 'fs';
import Attribute from '../utils/xml/attribute';

/**@description Config*/
export namespace fairygui.Config {
  export function loadPackage(file: string) {
    const content = readFileSync(file).toString('utf-8');

    // 读取description
    const description = Element.parse(content, 'packageDescription');
    if (description === undefined) {
      return undefined;
    }

    // 读取id
    const id = Attribute.parse(description.attributes).id;
    if (id === undefined) {
      return undefined;
    }

    // 读取组件列表
    const resources = Element.parse(description.content, 'resources');
  }
}

/**@description 元素*/
export namespace fairygui.Config.Element {
  /**
   * @description 元素解析结果
   * @author xfy
   * @interface Result
   */
  interface Result {
    /**@description 标签名*/
    tag: string;
    /**@description 属性文本*/
    attributes: string;
    /**@description 内容文本*/
    content: string;
  }

  /**@description 元素正则对象池*/
  const elementRegPools: Record<string, RegExp | undefined> = {};

  /**
   * @description 从根节点开始查找第一个符合`<tagname></tagname>`的成对节点
   * - $1: 元素标签名
   * - $2: 元素属性
   * - $3: 元素内容
   * @author xfy
   * @param {string} [tagname]
   * @returns {RegExp}
   */
  function createElementReg(tagname?: string): RegExp {
    const tag = tagname ?? `[\\w]+`;
    return new RegExp(`\\<(${tag})([^\\>]*)\\>([\\w\\W]+)\\<\\/\\1\\>`, 'm');
  }

  /**
   * @description 解析元素
   * @author xfy
   * @param {string} xml
   * @param {string} [tagname]
   * @returns {(Result | undefined)}
   */
  export function parse(xml: string, tagname?: string): Result | undefined {
    const key = tagname ?? 'root';
    let reg = elementRegPools[key];
    if (reg === undefined) {
      reg = createElementReg(tagname);
      elementRegPools[key] = reg;
    } else {
      reg.lastIndex = 0;
    }

    const result = reg.exec(xml);
    if (result === null) {
      return undefined;
    }
    const [_, tag, attributes, content] = result;
    return { tag, attributes, content };
  }
}
