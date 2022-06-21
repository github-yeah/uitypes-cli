import { readFileSync } from 'fs';

export namespace fairygui.Config {
  export function loadPackage(file: string): void {
    const content = readFileSync(file).toString('utf-8');
    const result = parseElement(content, 'resources');
    console.log(result);
  }

  ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// 类型 //////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  /**
   * @description 元素解析结果
   * @author xfy
   * @interface ElementResult
   */
  interface ElementResult {
    /**@description 标签名*/
    tag: string;
    /**@description 属性文本*/
    attributes: string;
    /**@description 内容文本*/
    content: string;
  }

  ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// 正则表达式 //////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

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
   * @returns {(ElementResult | undefined)}
   */
  function parseElement(xml: string, tagname?: string): ElementResult | undefined {
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
