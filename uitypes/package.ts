import { join } from 'path';
import { UIComponent } from './component';
import { fairygui } from './fairygui';
import { log } from './log';
import { statSync } from 'fs';

/**
 * @description UIPackage
 * @export
 * @interface UIPackage
 */
export interface UIPackage {
  /**@description id*/
  readonly id: string;
  /**@description 包名*/
  readonly packagename: string;
  /**@description 包内资源类型映射列表 {资源id : 类型（fairygui内置类型或自定义组件类型）}*/
  readonly typesMap: ReadonlyMap<string, string>;
  /**@description 组件映射列表（根据命名空间分组） - {命名空间: 同命名空间组件列表}*/
  readonly componentsMap: ReadonlyMap<string, UIComponent[]>;
}

/**@description UIPackage*/
export namespace UIPackage {
  /**
   * @description 包内资源配置
   * @export
   * @interface Resource
   */
  interface Resource {
    /** @description element tag name*/
    readonly name: string;

    /** @description 组件属性*/
    readonly attributes: Readonly<{
      /** @description 组件id  */
      id: string;

      /** @description 组件配置文件名称（含扩展名）*/
      name: string;

      /** @description 组件相对路径（UI包内的相对路径）*/
      path: string;

      /** @description 组件是否被导出 */
      exported?: string;
    }>;
  }

  /**
   * @description 加载`UIPackage`
   * @export
   * @param {string} packagename
   * @param {string} rootDir
   * @return {*}  {(UIPackage | undefined)}
   */
  export function load(packagename: string, rootDir: string): UIPackage | undefined {
    const packagePath = join(rootDir, packagename);
    if (statSync(packagePath).isDirectory() === false) {
      return undefined;
    }

    const file = join(packagePath, 'package.xml');
    const packageConfig = fairygui.Config.load(file);
    if (packageConfig === undefined) {
      log(`[UI包解析失败] [配置文件不存在！] [file=${file}]`);
      return undefined;
    }

    const description = packageConfig.elements?.find(({ name }) => name === 'packageDescription');
    const id = description?.attributes?.id as string | undefined;
    if (id === undefined) {
      log(`[UI包解析失败] [UI包id不存在！] [file=${file}]`);
      return undefined;
    }

    // 解析资源列表
    const resources = description?.elements?.find(({ name }) => name === 'resources')?.elements;
    /**@description 包内资源类型映射列表 {资源id : 类型（fairygui内置类型或自定义组件类型）}*/
    const typesMap: Map<string, string> = new Map();
    /**@description 组件映射列表（根据命名空间分组） - {命名空间: 同命名空间组件列表}*/
    const componentsMap: Map<string, UIComponent[]> = new Map();
    resources?.forEach((value) => {
      const { name: tag, attributes } = value as Resource;
      const { id, name, path } = attributes;
      // 解析内置类型组件
      if (tag !== 'component') {
        typesMap.set(id, fairygui.toFairyguiType(tag));
        return;
      }
      
      // 解析自定义组件类型
      const file = join(packagePath, path, name);
      const component = UIComponent.load(file);
      if (!component) {/**@description 组件不存在或解析失败*/
        return;
      }

      // 解析不需要导出的组件
      if(component.exportable === false) {
        typesMap.set(id, component.supertype);
        return;
      }
      const ns = fairygui.toRef(path);
      const type = ns.length > 0 ? `${packagename}.${ns}.${component.name}` : `${packagename}.${component.name}`;
      typesMap.set(id, type);

      // 根据命名空间分组
      let components = componentsMap.get(ns);
      if(components === undefined) {
        components = [];
        componentsMap.set(ns, components);
      }
      components.push(component);
    });
    return {
      id,
      packagename,
      typesMap,
      componentsMap
    }
  }

  /**
   * @description 编译
   * @export
   * @param {UIPackage} pkg UIPackage
   * @param {ReadonlyMap<string, UIPackage>} packagesMap key=包id
   * @param {boolean} [format] 是否格式化代码
   * @return {*}  {string}
   */
  export function compile(pkg: UIPackage, packagesMap: ReadonlyMap<string, UIPackage>, format?:boolean): string {
    const { packagename, componentsMap, typesMap } = pkg;
    const getType = (componentID: string, packageID?: string) => {
      const _typesMap = packageID ? packagesMap.get(packageID)?.typesMap : typesMap;
      return _typesMap?.get(componentID);
    }

    let code = '';
    componentsMap.forEach((components, ns) => {
      const componentsCode = components.map(component => UIComponent.compile(component, getType)).join(' ');
      if(ns.length === 0) {
        code = `${code}${componentsCode}`;
        return;
      }
      code = `${code}namespace ${ns} {${componentsCode}}`;
    });

    code = `namespace ${packagename} {${code}}`;
    if(format) {
      return fairygui.format(code);
    }
    return code;
  }
}
