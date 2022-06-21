/**
 * @description 属性匹配正则
 * - $1 属性名
 * - $2 属性值
 */
const AttributeReg = /(\w+)=\"(\w+)\"/gm;

/**
 * @description 解析属性
 * @author xfy
 * @export
 * @param {string} text
 * @returns {(Record<string, string | undefined>)}
 */
function parse(text: string): Record<string, string | undefined> {
  AttributeReg.lastIndex = 0;
  const attributes: Record<string, string> = {};
  while (true) {
    const result = AttributeReg.exec(text);
    if (result === null) {
      break;
    }
    const [_, name, value] = result;
    attributes[name] = value;
  }
  return attributes;
}

export { parse };
export default { parse };
