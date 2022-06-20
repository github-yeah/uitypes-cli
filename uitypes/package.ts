import { join } from "path";
import { UIComponent } from "./component";
import { fairygui } from "./fairygui";
import { log } from "./log";
import { statSync } from "fs";

/**@description namespace UIPackage*/
export namespace UIPackage {
  /**
   * @description 包内组件基本配置
   * @export
   * @interface ComponentConfig
   */
  interface ComponentConfig {
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

    const file = join(packagePath, "package.xml");
    const fileElement = fairygui.Config.load(file);
    if (fileElement === undefined) {
      log(`[包配置文件不存在！] [file=${file}]`);
      return '';
    }

    // 读取包组件列表
    const packageConfig = fileElement.elements?.find(e => e.name === "packageDescription");
    const componentConfigs = packageConfig?.elements?.find(e => e.name === "resources")?.elements as ComponentConfig[] | undefined;

    // 子命名空间代码映射 {子命名空间: 命名空间内组件代码-不包含子命名空间}
    const subNamespaceCodeMap: Record<string, string | undefined> = {};
    componentConfigs?.forEach(({ name: tagname, attributes }) => {
      // 解析非自定义组件，直接跳过
      if (tagname !== "component") {
        return;
      }

      // 解析自定义组件代码
      const componentFile = join(packagePath, attributes.path, attributes.name);
      const componentCode = UIComponent.compile(componentFile);
      if(componentCode.length < 1) {
        return;
      }

      // 解析自定义组件所属命名空间，按照命名空间分组代码
      const subNamespace = fairygui.toRef(attributes.path);
      const subNamespaceCode = subNamespaceCodeMap[subNamespace] ?? '';
      subNamespaceCodeMap[subNamespace] = `${subNamespaceCode} ${componentCode}`;
    });

    // 解析包命名空间别名
    const packageAttributes = packageConfig?.attributes as {id: string} | undefined;
    const id = packageAttributes?.id;
    const packageAliasCode = id === undefined ? '':`import ${fairygui.toNamespaceAlias(id)} = ${packagename};`;
    // const packageAliasCode = `import ${id} = ${packagename};`;

    // 整合代码
    let namespaceCode = '';
    for (const ns in subNamespaceCodeMap) {
      const nsCode = subNamespaceCodeMap[ns];
      namespaceCode += ns.length > 0 ? `namespace ${ns} {${nsCode}}`: nsCode;
    }
    const code = `${packageAliasCode} namespace ${packagename} {${namespaceCode}}`;
    if(format) {
      return fairygui.format(code);
    }
    return code;
  }
}
