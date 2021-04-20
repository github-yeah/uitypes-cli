namespace fairygui {
    /**
     * @description UI Package
     * @author xfy
     */
    export interface Package {
        /** @description 包id */
        readonly id: string;
        /** @description 发布的包名*/
        readonly name: string;
        /**@description UI包所在目录*/
        readonly directory: string;
        /** @description 组件map {id: Component | string} */
        readonly components: Map<string, Component | string>;
    }
}

namespace fairygui.Package {
    /**
        * @description 加载UI Package
        * @author xfy
        * @param {string} file
        * @returns {(Package | undefined)}
        */
    export function load(file: string): Package | undefined {
        const config = uit.xml2json.load(file);
        const root = config?.json.elements
            ?.find(e => e.name === 'packageDescription') as uit.xml2json.Element<{ id: string }> | undefined;
        if (root?.elements === undefined || root.attributes === undefined) {
            return undefined;
        }

        // 组件列表
        const resources = root.elements.find(e => e.name === 'resources')?.elements
        if (!resources) {
            return undefined;
        }

        // 解析包id
        const id = root.attributes.id;

        // 解析UI包发布名
        const publish = root.elements.find(ele => ele.name === 'publish') as uit.xml2json.Element<{ name: string }> | undefined;
        const name = publish?.attributes?.name;
        if (!name) {
            return undefined;
        }

        // 包目录
        const directory = uit.path.dirname(file);

        // 加载组件列表
        const components: Map<string, Component | string> = loadComponents(resources, directory);
        return { id, name, directory, components };
    }

    /**
     * @description 加载组件列表
     * @author xfy
     * @param {uit.xml2json.Element[]} elements
     * @param {string} directory
     * @returns {(Map<string, Component | string>)}
     */
    function loadComponents(elements: uit.xml2json.Element[], directory: string): Map<string, Component | string> {
        const components: Map<string, Component | string> = new Map();
        elements.forEach(e => {
            if (e.attributes === undefined) {
                return;
            }

            if (e.name !== 'component') {
                // 解析非自定义组件, 直接使用内置类型
                components.set(e.attributes.id, utils.typeMapping(e.name));
                return;
            }

            // 解析自定义组件
            const component = Component.load(e.attributes, directory);
            if (component === undefined) {
                // 未找到组件
                return;
            }

            // 没属性的组件，直接使用扩展类型
            if (!component.config.children?.length) {
                components.set(e.attributes.id, utils.typeMapping(component.config.extention ?? e.name));
                return;
            }
            components.set(component.id, component);
        })
        return components;
    }
}