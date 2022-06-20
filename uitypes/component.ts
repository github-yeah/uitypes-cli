import { basename } from "path";
import { fairygui } from "./fairygui";
import { log } from "./log";

/**@description UIComponent*/
export namespace UIComponent {
  /**
   * @description 组件属性配置
   * @interface AttributeConfig
   */
  interface AttributeConfig {
    /** @description 组件扩展类型名（使用时需要转换成fairgui.xxxxx）*/
    readonly name: string;

    /** @description 组件属性信息*/
    readonly attributes: Readonly<{
      /** @description 属性名称*/
      name?: string;

      /**
       * @description 引用的自定义组件类型对应的组件id
       * - 属性类型为自定义组件时，可以通过此id查找自定义组件具体类型
       * - 如果不存在则使 `ComponentAttributeNode['name']` - `组件扩展类型名`
       * */
      src?: string;

      /**
       * @description 引用的自定义组件类型所属包对应的包id
       * - 如果不存则在本包内查找具体组件类型
       * */
      pkg?: string;

      /**
       * @description 引用的自定义组件在其包内相对路径
       * - 如果不存则在本包内查找具体组件类型
       * */
       fileName?: string;
    }>;
  }
  

  /**
   * @description 编译`UIComponent`组件
   * @export
   * @param {string} file 组件配置文件路径
   * @param {boolean} [format] 是否格式化代码
   * @return {string}
   */
  export function compile(file: string, format?: boolean): string {
    // 解析组件名
    const name = basename(file, ".xml");
    if (fairygui.isValidName(name) === false) {
      log(`[组件名称解析失败！] [file=${file}]`);
      return '';
    }

    // 读取自定义组件
    const fileElement = fairygui.Config.load(file);
    if (!fileElement) {
      log(`[组件配置文件不存在！] [file=${file}]`);
      return '';
    }

    const rootConfig = fileElement.elements?.find((e) => e.name === "component");
    if (rootConfig === undefined) {
      log(`[组件配置文件解析失败！] [file=${file}]`);
      return '';
    }

    // 解析组件属性列表
    /**@description 子显示对象Record - {属性名: 属性类型} */
    let _children: Record<string, string | undefined> = {};
    /**@description Controller names type */
    let _controllers = '';
    /**@description Transition names type*/
    let _transitions = '';
    
    rootConfig.elements?.forEach(e => {
      switch(e.name) {
        case "controller":
          const controllerName = (e as AttributeConfig).attributes.name;
          if (controllerName !== undefined) {
            _controllers = `${_controllers} | '${controllerName}'`;
          }
          break;
          case "transition":
          const transitionName =(e as AttributeConfig).attributes.name;
          if (transitionName !== undefined) {
            _transitions = `${_transitions} | '${transitionName}'`;
          }
          break;
        case 'displayList':
          const displayList = e.elements as AttributeConfig[] | undefined;
          if (displayList === undefined) {
            return;
          }
          displayList.forEach(({name: tagName, attributes}) => {
            // 解析显示对象属性名
            const childName = attributes.name;
            if(childName === undefined || _children[childName] !== undefined || !fairygui.isValidName(childName)) {
              return;
            }
            
            // 解析显示对象内置属性类型
            if(tagName !== 'component' || !attributes.fileName?.length) {
              _children[childName] = fairygui.toFairyguiType(tagName);
              return;
            }

            // 解析显示对象自定义组件属性类型
            const pkg = attributes.pkg;
            const ref = fairygui.toRef(attributes.fileName.replace('.xml', ''));
            const childType = pkg?.length ? `${fairygui.toNamespaceAlias(pkg)}.${ref}`: ref;
            // const childType = pkg?.length ? `${pkg}.${ref}`: ref;
            _children[childName] = childType;
          });
          break;
      }
    });

    // 解析组件扩展类型
    const rootAttributes = rootConfig.attributes as {
      extention?: string;
    } | undefined;
    const supertype = fairygui.toFairyguiType(rootAttributes?.extention ?? rootConfig.name ?? 'component');
    const children = JSON.stringify(_children).replace(/\"/g, '');
    const controllers = _controllers.length > 0 ? _controllers : 'string';
    const transitions = _transitions.length > 0 ? _transitions : 'string';

    // 组合代码
    const code = `type ${name} = __UIComponent<${supertype}, ${children}, ${controllers}, ${transitions}>;`;
    if (format) {
      return fairygui.format(code);
    }
    return code;
  }
}
