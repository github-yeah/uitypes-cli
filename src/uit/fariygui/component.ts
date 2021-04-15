namespace fairygui {
    /**
     * @description 组件
     * @author xfy
     */
    export interface Component {
        /**@description 组件id*/
        readonly id: string;

        /**@description 组件名称*/
        readonly name: string;

        /**@description 包内命名空间*/
        readonly innerNS: string;

        /**@description 包内引用路径*/
        readonly address: string;

        /**@description 组件是否被导出*/
        readonly exported?: boolean;

        /**@description 组件配置*/
        readonly config: ComponentConfig;
    }

    /**
   * @description 组件配置类型
   * @author xfy
   */
    export interface ComponentConfig {
        /** @description 组件扩展类型*/
        readonly extention?: string;

        /** @description 属性列表*/
        readonly attributes?: Attribute[];
    }

    /**
     * @description 组件属性类型
     * @author xfy
     * @interface Attribute
     */
    interface Attribute {
        /** @description 属性id */
        readonly id: string;

        /** @description 属性名称*/
        readonly name: string;

        /** 
         * @description 属性引用的组件的配置文件路径
         * - 组件所属包目录的相对路径
        */
        readonly fileName: string;

        /**
         * @description 属性引用的组件的id
         * - 如果不存在则使用 fairygui内置属性
         * */
        readonly src?: string;

        /**
         * @description 属性引用的组件所属UI包的包id.
         * - 如果不存在则表示引用的是属性所属组件包的包内组件
         * */
        readonly pkg?: string;

        /** @description 属性引用的组件内置类型（当`src`不存在时，使用此属性解析内置组件类型）*/
        readonly type: string;
    }
}


// ====================== 组件 ======================

namespace fairygui.Component {
    /**
    * @description 组件概述
    * @author xfy
    */
    interface ComponentOutline {
        /** @description 组件id  */
        readonly id: string;

        /** @description 组件配置文件名称（含扩展名）*/
        readonly name: string;

        /** @description 组件相对路径（UI包目录内的相对领）*/
        readonly path: string;

        /** @description 组件是否被导出 */
        readonly exported?: boolean;
    }

    /**
     * @description 加载组件
     * @author xfy
     * @export
     * @param {ComponentOutline} outline 组件概述信息（读取package.xml获取）
     * @param {string} baseURL  组件所属包的目录
     * @returns {(Component | undefined)}
     */
    export function load(outline: ComponentOutline, baseURL: string): Component | undefined {
        const file = uit.path.join(baseURL, outline.path, outline.name);
        const config = ComponentConfig.load(file);
        if (!config) {
            // 未找到组件
            return undefined;
        }

        // 组件名字
        const name = uit.utils.rejectExtension(outline.name);

        // 组件命名空间
        const innerNS = uit.utils.toRefrence(outline.path);

        // 引用地址
        const address = `${innerNS.length > 0 ? `${innerNS}.` : ''}${name}`

        const component: Component = {
            id: outline.id,
            name,
            innerNS,
            address,
            exported: outline.exported,
            config
        };
        return component;
    }

}


// ====================== 组件配置 ======================

namespace fairygui.ComponentConfig {
    // 属性类型 
    type Attribute = Exclude<ComponentConfig["attributes"], undefined> extends (infer R)[] ? Record<keyof R, string> : never;

    /**
     * @description 加载组件配置
     * @author xfy
     * @export
     * @param {string} file 配置路径
     * @returns {(ComponentConfig | undefined)}
     */
    export function load(file: string): ComponentConfig | undefined {
        const data = uit.xml2json.load(file);
        const root = data?.json.elements
            ?.find(e => e.name === 'component') as uit.xml2json.Element<{ extention?: string }> | undefined;
        if (!root) {
            return undefined;
        }

        // 扩展类型
        const extention = root.attributes?.extention;

        // 获取显示列表
        const displayList = root.elements
            ?.find(e => e.name === 'displayList')
            ?.elements as uit.xml2json.Element<Attribute>[] | undefined;

        if (displayList === undefined || displayList.length === 0) {
            // 属性列表为空
            return { extention };
        }

        // 已存在的属性名，防止重名（重名的使用第一个）
        const existing: Record<string, true | undefined> = {};
        const attributes: Attribute[] = [];
        for (const element of displayList) {
            const attribute = element.attributes;
            if (attribute?.name !== undefined) {
                const name = attribute.name;
                // 剔除重复名字和不合规的名字（比如数字开头的或fgui自定义的名字: n1, n...999）
                if (existing[name] === undefined && utils.isLegalName(name)) {
                    // 设置组件基本类型
                    attribute.type = utils.typeMapping(element.name);
                    attributes.push(attribute);
                }
            }
        }
        return { extention, attributes };
    }

}
