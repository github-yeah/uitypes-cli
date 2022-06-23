/**
 * @description 属性匹配正则
 * - $1 属性名
 * - $2 属性值，双引号内的属性值
 * - $3 属性值，单引号内的属性值
 * - $4 属性值，没有引号的属性值
 */
const AttributeReg = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;

/**
 * @description 解析属性
 * @author xfy
 * @export
 * @param {string} text
 * @returns {(Partial<Record<string, string>>)}
 */
export function parse(text: string): Partial<Record<string, string>> {
  AttributeReg.lastIndex = 0;
  const attributes: Record<string, string> = {};
  let result = AttributeReg.exec(text);
  while (result !== null) {
    const [, key, value, value1, value2] = result;
    attributes[key] = value ?? value1 ?? value2;
    result = AttributeReg.exec(text);
  }
  return attributes;
}

export default { parse };
