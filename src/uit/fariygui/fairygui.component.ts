namespace fairygui.Component {
    /** @description 匹配无用名字（fariygui自动生成的名字或者纯数字名字）*/
    const useless_name_reg = /^(\-|[0-9]|n[0-9]*$)/;    // 数字或负号开头+n开头数字结尾

    /**@description 组件配置*/
    export type Config = {
        // id
        readonly id: string;
        // 名字
        readonly name: string;
        // package
        readonly package: string;
        // file
        readonly file: string;
        // 是否导出
        readonly exported?: boolean;
    };

    /** @description 引用属性类型*/
    export type RefAttribute = uit.project.Attribute & {
        // 属性引用的组件所属的包ID
        packageID?: string;
        // 属性引用的组件的ID
        componentID?: string;
    }

    /**
     * @description 读取组件配置
     * @author xfy
     * @export
     * @param {string} base
     * @param {{
     *         id: string;  // id
     *         name: string; // 名字
     *         path: string; // 包内相对路径
     *         exported?: boolean; // 是否导出
     *     }} data
     * @returns {(Config | undefined)}
     */
    export function readConfig(data: {
        id: string;  // id
        name: string; // 名字
        path: string; // 包内相对路径
        exported?: boolean; // 是否导出
        basePath: string;
    }): Config | undefined {
        const { id, name: fileName, path, exported, basePath } = data;
        if (!exported) {
            return undefined;
        }
        const name = uit.utils.rejectExtension(fileName);
        const pkg = uit.utils.toRefrence(path);
        const file = `${basePath}${path}${fileName}`;
        return {
            id, name, package: pkg, file, exported
        };
    }

    /**
     * @description 读取组件
     * @author xfy
     * @export
     * @param {string} config
     * @returns {(uit.project.Component<RefAttribute> | undefined)}
     */
    export function readComponent(config: Config): uit.project.Component<RefAttribute> | undefined {
        const { name, file, package: pkg, exported } = config;
        if (!exported) {
            // 剔除未导出的组件
            return undefined;
        }

        const data = uit.xml2json.load(file);
        const json = data?.json;
        if (!json) {
            return undefined;
        }

        // 显示列表
        const displayList = json?.elements
            ?.find(ele => ele.name === 'component')
            ?.elements
            ?.find(ele => ele.name === 'displayList')
            ?.elements;

        if (!displayList) {
            return {
                name, package: pkg, attributes: []
            };
        }

        // 已存在的属性名，防止重名（重名的使用第一个）
        const existingNames: Record<string, true | undefined> = {};
        const attributes: RefAttribute[] = [];

        for (const displayObject of displayList) {
            const attribute = readAttribute(displayObject);
            if (!attribute || existingNames[attribute.name]) {
                continue;
            }
            existingNames[attribute.name] = true;
            attributes.push(attribute);
        }

        // if (attributes.length === 0) {
        //     return undefined;
        // }

        // 组件
        const component: uit.project.Component<RefAttribute> = {
            name,
            package: pkg,
            attributes
        };

        return component;
    }

    /**
     * @description 读取组件的显示对象属性
     * @author xfy
     * @param {uit.xml2json.Element<Attribute>} displayObject
     * @returns {(RefAttribute | undefined)}
     */
    function readAttribute(displayObject: uit.xml2json.Element<Attribute>): RefAttribute | undefined {
        const { attributes } = displayObject;
        if (!attributes) {
            return undefined;
        }

        const name = attributes.name;
        if (!name || useless_name_reg.test(name)) {
            // 剔除名字不合规的显示对象（比如数字开头的或fgui自定义的名字: n1, n...999）
            return undefined;
        }

        // 如果是引用组件，属性需要去项目字典中查询引用对应的包路径
        const { pkg: packageID, src: componentID } = attributes;
        const type = typeMapping(displayObject.name);
        const attribute = {
            name, type, packageID, componentID
        }
        return attribute;
    }

    // 类型映射
    const FGUITypeMapping: Record<string, string> = {
        text: 'fairygui.GTextField',
        richtext: 'fairygui.GRichTextField',
        progressar: 'fairygui.GProgressBar'
    };

    /**
     * @description 类型映射
     * @author xfy
     * @param {string} type
     * @returns {string}
     */
    function typeMapping(type: string): string {
        const existing = FGUITypeMapping[type];
        if (existing) {
            return existing;
        }

        if (type.length < 1) {
            return type;
        }
        return `fairygui.G${type.substr(0, 1).toUpperCase()}${type.substr(1)}`
    }

    type Attribute = {
        // id
        id: string;
        // 名字
        name: string;
        src?: string;
        // 属性组件所属的包ID （package.xml - packageDescription.id）
        pkg?: string;
        // 属性组件在其所属包内文件路径
        fileName?: string;
    }

}