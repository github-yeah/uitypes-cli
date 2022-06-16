import { existsSync, readdirSync } from "fs";
import { fairygui } from "./fairygui";
import { log } from "./log";
import { loadUIPackage, packageEncoding, UIPackage } from "./package";

/**
 * @description UI Project
 * @author xfy
 * @export
 * @interface UIProject
 */
export interface UIProject {
  /**@description UIPackage Map  {package-id: UIPackage}*/
  readonly packageMap: Readonly<Record<string, UIPackage | undefined>>;
}

/**
 * @description 加载UIProject
 * @author xfy
 * @export
 * @param {string} root UI根目录
 * @returns {(UIProject | undefined)}
 */
export function loadUIProject(root: string): UIProject | undefined {
  if (existsSync(root) === false) {
    log(`UI项目根目录不存在! [root=${root}]`);
    return undefined;
  }
  const packagenames = readdirSync(root);
  const packageMap = packagenames.reduce(
    (map, packagename) => {
      const pkg = loadUIPackage(packagename, root);
      if (pkg) {
        map[pkg.id] = pkg;
      }
      return map;
    }, {} as Record<string, UIPackage>
  );
  const project: UIProject = {
    packageMap
  }
  return project;
}

/**
 * @description 编译UIProject
 * @author xfy
 * @export
 * @param {string} name         project名字
 * @param {UIProject} project UIproject
 * @param {boolean} [format]  是否格式化代码
 * @returns {string}
 */
export function projectEncoding(name: string, project: UIProject, format?: boolean): string {
  const packageMap = project.packageMap;
  const packageCodeList: string[] = [];
  for (const packageID in packageMap) {
    const pkg = packageMap[packageID];
    if (pkg) {
      const pkgCode = packageEncoding(pkg, packageMap);
      packageCodeList.push(pkgCode);
    }
  }

  const code = `declare namespace ${name} {${fairygui.HEADER} ${packageCodeList.join(' ')}}`;
  if (format) {
    return fairygui.format(code);
  }
  return code;
}









