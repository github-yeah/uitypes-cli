import { existsSync, readdirSync } from 'fs';
import { fairygui } from './fairygui';
import { log } from './log';
import { UIPackage } from './package';

/**
 * @description UIProject
 * @export
 * @interface UIProject
 */
export interface UIProject {
  /**@description UIPackage Map*/
  readonly packagesMap: ReadonlyMap<string, UIPackage>;
}

/**@description UIProject*/
export namespace UIProject {
  /**
   * @description 加载`UIProejct`
   * @export
   * @param {string} root
   * @return {*}  {(UIProejct | undefined)}
   */
  export function load(root: string): UIProject | undefined {
    if (existsSync(root) === false) {
      log(`UI项目根目录不存在! [root=${root}]`);
      return undefined;
    }
    const packagesMap: Map<string, UIPackage> = new Map();
    const packagenames = readdirSync(root);
    packagenames.forEach(packagename => {
      const pkg = UIPackage.load(packagename, root);
      if(pkg) {
        packagesMap.set(pkg.id, pkg);
      }
    });
    return { 
      packagesMap 
    };
  }

  /**
   * @description 编译`UIProject`
   * @author xfy
   * @export
   * @param {string} root UI根目录
   * @param {string} publishname Project publish name
   * @param {boolean} format 是否格式化代码
   * @returns {string}
   */
  export function compile(root: string, publishname: string, format?: boolean): string;
  export function compile(project: UIProject, publishname: string, format?: boolean): string;
  export function compile(data: string | UIProject, publishname: string, format?: boolean): string {
    const project = typeof data === 'string' ? load(data) : data;
    if (project === undefined) {
      return '';
    }

    const { packagesMap } = project;
    let code = '';
    packagesMap.forEach(pkg => {
      code += UIPackage.compile(pkg, packagesMap);
    });
    code = `declare namespace ${publishname} {${fairygui.ComponentTypeCode} ${code}}`;

    if (format) {
      return fairygui.format(code);
    }
    return code;
  }
}
