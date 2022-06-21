import { join } from 'path';
import { UIComponent } from './component';
import { fairygui } from './fairygui';
import { log } from './log';
import { statSync } from 'fs';

/**@description UIPackage*/
export namespace UIPackage {
  /**
   * @description 包内资源配置
   * @export
   * @interface ResourceItem
   */
  interface ResourceItem {
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

  export function load(packagename: string, rootDir: string) {
    const packagePath = join(rootDir, packagename);
    if (statSync(packagePath).isDirectory() === false) {
      return undefined;
    }

    const file = join(packagePath, 'package.xml');
    const packageConfig = fairygui.Config.load(file);
    if (packageConfig === undefined) {
      log(`[UI包解析失败] [配置文件不存在！] [file=${file}]`);
      return '';
    }

    const description = packageConfig.elements?.find(({ name }) => name === 'packageDescription');
    const id = description?.attributes?.id as string | undefined;
    if (id === undefined) {
      log(`[UI包解析失败] [UI包id不存在！] [file=${file}]`);
      return undefined;
    }

    // 解析资源列表
    const resourceItems = description?.elements?.find(({ name }) => name === 'resources')?.elements;
    /**@description 资源类型映射列表 {资源id : 类型（fairygui内置类型或自定义组件类型）}*/
    const resourcesMap: Record<string, string> = {};
    resourceItems?.forEach((value) => {
      const { name: tag, attributes } = value as ResourceItem;
      const { id, name, path } = attributes;
      // 解析内置类型
      if (tag !== 'component') {
        resourcesMap[id] = fairygui.toFairyguiType(tag);
        return;
      }

      // 解析自定义组件类型
      const file = join(packagePath, path, name);
      const component = UIComponent.load(file);
      if (!component) {
        // 组件不存在或格式错误
        return;
      }

      // if(component.children?.length)

      // const { name: classname, extention, children } = component;
    });
  }

  /**
   * @description 编译`UIPackage`
   * @author xfy
   * @export
   * @param {string} packagename  包名
   * @param {string} rootDir   项目根目录
   * @param {boolean} [format]  是否格式化代码
   * @returns {string}
   */
  export function compile(packagename: string, rootDir: string, format?: boolean): string {
    const packagePath = join(rootDir, packagename);
    // 过滤包文件夹
    if (statSync(packagePath).isDirectory() === false) {
      return '';
    }

    const file = join(packagePath, 'package.xml');
    const fileElement = fairygui.Config.load(file);
    if (fileElement === undefined) {
      log(`[包配置文件不存在！] [file=${file}]`);
      return '';
    }

    // 读取包组件列表
    const packageConfig = fileElement.elements?.find(({ name }) => name === 'packageDescription');
    const componentConfigs = packageConfig?.elements?.find(({ name }) => name === 'resources')?.elements as
      | ResourceItem[]
      | undefined;

    // 子命名空间代码映射 {子命名空间: 命名空间内组件代码-不包含子命名空间}
    const subNamespaceCodeMap: Record<string, string | undefined> = {};
    componentConfigs?.forEach(({ name: tagname, attributes }) => {
      // 解析非自定义组件，直接跳过
      if (tagname !== 'component') {
        return;
      }

      // 解析自定义组件代码
      const componentFile = join(packagePath, attributes.path, attributes.name);
      const componentCode = UIComponent.compile(componentFile);
      if (componentCode.length < 1) {
        return;
      }

      // 解析自定义组件所属命名空间，按照命名空间分组代码
      const subNamespace = fairygui.toRef(attributes.path);
      const subNamespaceCode = subNamespaceCodeMap[subNamespace] ?? '';
      subNamespaceCodeMap[subNamespace] = `${subNamespaceCode} ${componentCode}`;
    });

    // 解析包命名空间别名
    const packageAttributes = packageConfig?.attributes as { id: string } | undefined;
    const id = packageAttributes?.id;
    // 以包id为命名空间别名，需加前缀`_`，防止数字开头的包id
    const packageAliasCode = id === undefined ? '' : `import _${id} = ${packagename};`;

    // 整合代码
    let namespaceCode = '';
    for (const ns in subNamespaceCodeMap) {
      const nsCode = subNamespaceCodeMap[ns];
      namespaceCode += ns.length > 0 ? `namespace ${ns} {${nsCode}}` : nsCode;
    }
    const code = `${packageAliasCode} namespace ${packagename} {${namespaceCode}}`;
    if (format) {
      return fairygui.format(code);
    }
    return code;
  }
}
