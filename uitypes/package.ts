import { join } from 'path';
import { UIComponent } from "./component";
import { fairygui } from './fairygui';
import { log } from './log';
import { statSync } from 'fs';

/**
 * @description UIPackage
 * @author xfy
 * @interface UIPackage
 */
export interface UIPackage {
  /**
   * @description id
   * @type {string}
   */
  readonly id: string;

  /**
   * @description 包名
   */
  readonly packagename: string;

  /**
   * @description 发布名称
   */
  readonly publishname: string;
  
  /**
   * @description 组件映射列表
   * - {命名空间: UIComponent[]}
   */
  readonly componentsMap: Readonly<Record<string, undefined | readonly UIComponent[]>>;

  /**
   * 组件引用地址映射列表
   * - {组件id: 组件引用字符串}
   * @type {(Readonly<Record<string, string | undefined>>)}
   */
  readonly componentsRefMap: Readonly<Record<string, string | undefined>>;
}

/**@description namespace UIPackage*/
export namespace UIPackage {
  /**
   * @description 加载`UIPackage`包
   * @author xfy
   * @export
   * @param {string} packagename  包名
   * @param {string} basePath 项目根目录
   * @returns {(UIPackage | undefined)}
   */
  export function load(packagename: string, basePath: string): UIPackage | undefined {
    const packagePath = join(basePath, packagename);
    if (statSync(packagePath).isDirectory() === false) {
      // 过滤包文件夹
      return undefined;
    }
  
    const file = join(packagePath, 'package.xml');
    const fileElement = fairygui.Config.load(file);
    if (!fileElement) {
      log(`[包配置文件不存在！] [file=${file}]`);
      return undefined;
    }
  
    const pkgRootElement = fileElement.elements?.find(e => e.name === 'packageDescription') as fairygui.Config.PackageRootNode | undefined;
    if (!pkgRootElement || !pkgRootElement.elements || !pkgRootElement.attributes) {
      log(`[包件配置文件解析失败！] [file=${file}]`);
      return undefined;
    }
  
    // 解析包id
    const id = pkgRootElement.attributes.id;
  
    // 解析包发布名
    const publishnode = pkgRootElement.elements.find(e => e.name === 'publish') as fairygui.Config.PackagePublishNode | undefined;
    const publishname = publishnode?.attributes?.name ?? packagename;
  
    // 读取包组件列表
    const resourcesNode = pkgRootElement.elements.find(e => e.name === 'resources') as fairygui.Config.PackageResourcesNode | undefined;
    if (!resourcesNode?.elements?.length) {
      return undefined;
    }
  
    // 组件列表
    const componentsMap:Record<string, UIComponent[] | undefined> = {};
    // 组件类型映射表
    const componentsRefMap: Record<string, string | undefined> = {};
    resourcesNode.elements.forEach(({ name, attributes }) => {
      // 解析非自定义组件, 直接使用内置扩展类型
      if (name !== 'component') {
        const type = fairygui.typeMapping(name);
        componentsRefMap[attributes.id] = type;
        return;
      }
  
      // 解析自定义组件
      const filePath = join(packagePath, attributes.path, attributes.name);
      const component = UIComponent.load(filePath);
      if (component === undefined) {
        // 组件加载失败，不放入类型映射列表内，使用此类型的属性不应该存在
        return;
      }
  
      // 解析没有自定义内容的组件
      if(typeof component === 'string') {
        componentsRefMap[attributes.id] = component;
        return;
      }
  
      // 解析空组件，直接使用内置类型
      if (!component.displayList?.length) {
        componentsRefMap[attributes.id] = component.extention;
        return;
      }
  
      // 解析自定义组件引用类型
      const pathRef = fairygui.toReferencePath(attributes.path);
      const ref = pathRef.length > 0 ? `${packagename}.${pathRef}.${component.publishName}` : `${packagename}.${component.publishName}`;
      componentsRefMap[attributes.id] = ref;
  
      // 按照命名空间把组件分组
      let components = componentsMap[pathRef];
      if(components === undefined) {
        components = [];
        componentsMap[pathRef] = components;
      }
      components.push(component);
    });
  
    return {
      id,
      packagename,
      publishname,
      componentsMap,
      componentsRefMap
    };
  }

  /**
   * @description 编译'UIPackage'
   * @export
   * @param {UIPackage} pkg 包
   * @param {(packageID: string) => UIPackage} getPackage 根据id获取 `UIPackage`
   * @param {boolean} [format]  是否格式化代码
   * @return {*}  {string}
   */
  export function compile(pkg: UIPackage, getPackage: (packageID: string) => UIPackage | undefined, format?: boolean): string {
    // 获取组件引用路径
    const getReference = (componentID: string, packageID?: string) => {
      const refPackage = packageID ? getPackage(packageID) : pkg;
      return refPackage?.componentsRefMap[componentID];
    };

    const { componentsMap } = pkg;
    const namespaceCodeList: string[] = [];
    for (const ns in componentsMap) {
      const components = componentsMap[ns];
      // 编译同命名空间下的组件列表代码（未格式化）
      const componentsCode = components?.map(component => UIComponent.compile(component, getReference)).join(' ') ?? '';
      // 命名空间为空的话表示是包命名空间的直系子组件
      namespaceCodeList.push(ns.length === 0 ? componentsCode : `namespace ${ns} {${componentsCode}}`);
    }
  
    const code = `namespace ${pkg.packagename} {${namespaceCodeList.join(' ')}}`
    if (format) {
      return fairygui.format(code);
    }
    return code;
  }
}