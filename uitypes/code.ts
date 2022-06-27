import { format as prettierFormat } from 'prettier';

/**
 * @description 代码格式化
 * @author xfy
 * @export
 * @param {string} code
 * @returns {string}
 */
export function format(code: string): string {
  return prettierFormat(code, { parser: 'typescript', printWidth: 120, singleQuote: true });
}

/**@description snipet type*/
export type Snippet = string | Snippet[];

/**
 * @description snippet转换成代码格式的字符串
 * @author xfy
 * @param {Snipet} snipet 代码片段
 * @param {string} tab  indentation tab
 * @returns {string}
 */
export function toCode(snippet: Snippet, tab: string = ''): string {
  if (Array.isArray(snippet)) {
    return snippet.map((spt) => (Array.isArray(spt) ? toCode(spt, `${tab}\t`) : toCode(spt, tab))).join('\n');
  }
  return `${tab}${snippet}`;
}
export default { format };
