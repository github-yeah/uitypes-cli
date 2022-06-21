import { existsSync, readdirSync } from 'fs';
import { fairygui } from './fairygui';
import { log } from './log';
import { UIPackage } from './package';

/**@description UIProject*/
export namespace UIProejct {
  /**
   * @description 编译`UIProject`
   * @author xfy
   * @export
   * @param {string} root UI根目录
   * @param {string} publishname Project publish name
   * @returns {string}
   */
  export function compile(root: string, publishname: string, format?: boolean): string {
    if (existsSync(root) === false) {
      log(`UI项目根目录不存在! [root=${root}]`);
      return '';
    }
    const packagenames = readdirSync(root);
    const packageCode = packagenames.map((packagename) => UIPackage.compile(packagename, root)).join(' ');
    const code = `declare namespace ${publishname} {${fairygui.ComponentTypeCode} ${packageCode}}`;
    if (format) {
      return fairygui.format(code);
    }
    return code;
  }
}
