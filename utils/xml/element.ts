import Attribute from './attribute';

/**tag symbol*/
export const tag = Symbol.for('xml.tag');

/**content symbol*/
export const content = Symbol.for('xml.content');

/**
 * @description 元素解析结果
 * @author xfy
 * @interface Result
 */
export interface Result extends Record<string, string | undefined> {
  /**@description 标签名*/
  [tag]: string;
  /**@description 内容文本*/
  [content]: string;
}

/**
 * @description 从根节点开始查找第一个符合`<tagname></tagname>`的成对节点
 * - $1: 元素标签名
 * - $2: 元素属性
 * - $3: 元素内容
 * @author xfy
 * @param {string} [tagname]
 * @returns {RegExp}
 */
function getElementReg(tagname?: string): RegExp {
  const tag = tagname ?? `[\\w]+`;
  return new RegExp(`\\<(${tag})([^\\>]*)\\>([\\w\\W]+)\\<\\/\\1\\>`, 'm');
}

/**@description 从根节点开始查找第一个符合`<tagname></tagname>`的成对节点*/
const ElementReg = getElementReg();

const CloseElementReg = /<(\w+)([^<>]+)\/>/gm;

/**
 * @description 解析元素
 * @author xfy
 * @param {string} xml
 * @returns {(Result | undefined)}
 */
export function parse(xml: string): Result | undefined {
  ElementReg.lastIndex = 0;
  const result = ElementReg.exec(xml);
  if (result === null) {
    return undefined;
  }
  const [_, tagStr, attributesStr, contentStr] = result;
  const attributes = Attribute.parse(attributesStr);
  return {
    [tag]: tagStr,
    [content]: contentStr,
    ...attributes,
  };
}

export default { tag, content, parse };
