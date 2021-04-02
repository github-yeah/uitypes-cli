namespace fairygui.PKG {

    /**@description UI package 配置*/
    export type Config = {
        // id
        readonly id: string;
        // 发布后的包名
        readonly name: string;
        // 组件配置
        readonly components: Record<string, fairygui.Component.Config>;
    };

    /**
     * @description 读取包配置
     * @author xfy
     * @export
     * @param {string} file 配置文件
     * @returns {(Config | undefined)}
     */
    export function readConfig(file: string): Config | undefined {
        const data = uit.xml2json.load(file);
        const json = data?.json;
        if (!json) {
            return undefined;
        }

        const root = json?.elements?.find(ele => ele.name === 'packageDescription');
        if (!root?.elements) {
            return undefined;
        }

        // 解析包 id
        const rootAttributes: { id: string } | undefined = root.attributes;
        const id = underscored(rootAttributes?.id);

        // 解析发布的包名
        const publish = root.elements.find(ele => ele.name === 'publish');
        const publishAttributes: { name: string } | undefined = publish?.attributes;
        const basename = uit.path.basename(file);
        const name = publishAttributes?.name ?? uit.utils.rejectExtension(basename);

        // 组件列表
        const components: Config['components'] = {};

        // 包配置
        const config: Config = { id, name, components }


        // 解析resources
        const resources = root.elements.find(ele => ele.name === 'resources')?.elements;
        if (!resources) {
            return config;
        }

        const basePath = uit.path.dirname(file);

        // 解析 component 列表
        for (const element of resources) {
            if (element.name === 'component' && element.attributes !== undefined) {
                element.attributes.basePath = basePath;
                const component = fairygui.Component.readConfig(element.attributes);
                if (component) {
                    components[component.id] = component;
                }
            }
        }

        return config;
    }

    /**
     * @description 下划线，组织数字开头的值（比如防止id为数字开头）
     * @author xfy
     * @export
     * @param {string} [value]
     * @returns {string}
     */
    export function underscored(value?: string): string {
        return `_${value ?? ''}`
    }

}