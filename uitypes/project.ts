import { existsSync, readdirSync } from "fs";
import { fairygui } from "./fairygui";
import { log } from "./log";
import { UIPackage } from "./package";

/**
 * @description UI Project
 * @author xfy
 * @export
 * @interface UIProject
 */
export interface UIProject {
  /**@description Project publish name*/
  readonly publishname: string;

  /**@description UIPackage Map  {package-id: UIPackage}*/
  readonly packageMap: Readonly<Record<string, UIPackage | undefined>>;
}
export namespace UIProejct {
  /**
   * @description 加载UIProject
   * @author xfy
   * @export
   * @param {string} publishname Project publish name
   * @param {string} root UI根目录
   * @returns {(UIProject | undefined)}
   */
  export function load(publishname: string, root: string): UIProject | undefined {
    if (existsSync(root) === false) {
      log(`UI项目根目录不存在! [root=${root}]`);
      return undefined;
    }
    const packagenames = readdirSync(root);
    const packageMap = packagenames.reduce(
      (map, packagename) => {
        const pkg = UIPackage.load(packagename, root);
        if (pkg) {
          map[pkg.id] = pkg;
        }
        return map;
      }, {} as Record<string, UIPackage>
    );
    const project: UIProject = {
      publishname,
      packageMap
    }
    return project;
  }

  /**
   * @description 编译项目
   * @export
   * @param {UIProject} project   项目
   * @param {string[]} [packages] 仅编译指定包，不设置表示编译项目内所有包
   * @param {boolean} [format]  是否格式化代码
   * @return {*}  {string}
   */
  export function compile(project: UIProject, packages?: string[], format: boolean = true): string {
    // 根据id获取包
    const getPackage = (packageID: string) => {
      return project.packageMap[packageID];
    }

    const {publishname, packageMap} = project;
    const packageCodeList: string[] = [];
    for (const packageID in packageMap) {
      const pkg = packageMap[packageID];
      if (pkg !== undefined && (packages === undefined || packages.includes(pkg.packagename))) {
        const packageCode = UIPackage.compile(pkg, getPackage)
        packageCodeList.push(packageCode);
      }
    }
    const code = `declare namespace ${publishname} {${fairygui.HEADER} ${packageCodeList.join(' ')}}`;
    if(format) {
      return fairygui.format(code);
    }
    return code;
  }
}


export namespace a {
  export const b = 10000;
}