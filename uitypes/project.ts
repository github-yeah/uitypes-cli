import { existsSync, readdirSync } from 'fs';
import { emitter } from './emitter';
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
    packagenames.forEach((packagename) => {
      const pkg = UIPackage.load(packagename, root);
      if (pkg) {
        packagesMap.set(pkg.id, pkg);
      }
    });
    return {
      packagesMap,
    };
  }

  /**
   * @description 编译选项
   * @author xfy
   * @interface Options
   */
  interface Options {
    /**@description 导出指定的包，不设置则全部导出*/
    packages?: string[];
    /**@description 是否格式化代码*/
    format?: boolean;
    /**@description 导出文件路径，不设置则不导出*/
    outFile?: string;
  }

  /**
   * @description 编译
   * @author xfy
   * @export
   * @param {string} root UI项目根目录
   * @param {string} publishname 发布命名空间名
   * @param {Options} [options] 编译选项
   * @returns {string}
   */
  export function compile(root: string, publishname: string, options?: Options): string;
  /**
   * @description 编译
   * @author xfy
   * @export
   * @param {UIProject} project UI项目
   * @param {string} publishname 发布命名空间名
   * @param {Options} [options] 编译选项
   * @returns {string}
   */
  export function compile(project: UIProject, publishname: string, options?: Options): string;
  export function compile(data: string | UIProject, publishname: string, options?: Options): string {
    const project = typeof data === 'string' ? load(data) : data;
    if (project === undefined) {
      return '';
    }
    const packages = options?.packages;
    const format = options?.format;
    const { packagesMap } = project;
    let code = '';
    packagesMap.forEach((pkg) => {
      if (!packages?.length || packages?.includes(pkg.packagename)) {
        code += UIPackage.compile(pkg, packagesMap);
      }
    });
    code = `declare namespace ${publishname} {${fairygui.ComponentTypeCode} ${code}}`;

    if (format) {
      code = fairygui.format(code);
    }

    if (options?.outFile !== undefined) {
      emitter(options.outFile, code);
    }
    return code;
  }
}
