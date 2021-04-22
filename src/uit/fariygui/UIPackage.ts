namespace fairygui {
    /**
     * @description UIPackage
     * @author xfy
     * @export
     * @class UIPackage
     */
    export class UIPackage {

        /**@description 组件映射列表 { id: UIComponent | string }*/
        readonly components: Map<string, UIComponent | string>;

        private constructor(
            /** @description 包id */
            readonly id: string,
            /** @description 发布的包名*/
            readonly name: string,
            /** @description 包所在目录*/
            readonly directory: string,
            elements: uit.xml2json.Element[]
        ) {
            this.components = this.loadComponents(elements as ComponentElement[], directory);
        }

        /**
         * @description 加载包内所有组件
         * @author xfy
         * @protected
         * @param {ComponentElement[]} elements
         * @param {string} basePath
         * @returns {(Map<string, UIComponent | string>)}
         * @memberof UIPackage
         */
        protected loadComponents(elements: ComponentElement[], basePath: string): Map<string, UIComponent | string> {
            const map: Map<string, UIComponent | string> = new Map();
            for (const element of elements) {
                if (element.name !== 'component') {
                    // 解析非自定义组件, 直接使用内置类型
                    map.set(element.attributes.id, utils.typeMapping(element.name));
                }
                else {
                    const component = UIComponent.load(element.attributes, basePath);
                    if (component !== undefined) {
                        // 显示列表为空的不生成组件，如果判断控制器和transition，请打开后续代码
                        // const { name, children, controllers, transitions } = component;
                        // if (utils.isLegalName(name) && (children.length !== 0 || controllers.length !== 0 || transitions.length !== 0)) {
                        const { name, children } = component;
                        if (utils.isLegalName(name) && children.length !== 0) {
                            // 设置自定义组件类型
                            map.set(component.outline.id, component);
                        }
                        else {
                            // 没有任何自定义元素的组件，直接使用父类型即可
                            map.set(component.outline.id, component.supertype);
                        }
                    }
                }
            }
            return map;
        }

        /**
         * @description 编码
         * @author xfy
         * @param {Map<string, UIPackage>} packageMap   所有的包列表{ id: UIPackage}，用于查找跨包引用的组件
         * @returns {uit.snipet.Snipet[]}
         * @memberof UIPackage
         */
        encoding(packageMap: Map<string, UIPackage>): uit.snipet.Snipet[] {
            // 根据包内命名空间把组件代码分组
            const nsCodeMap: Map<string, uit.snipet.Snipet[]> = new Map();
            this.components.forEach(component => {
                if (typeof component === 'string') {
                    return;
                }

                const existing = nsCodeMap.get(component.ns);
                const codeList = existing ?? [];
                if (existing === undefined) {
                    nsCodeMap.set(component.ns, codeList);
                }

                const code = this.componentEncoding(component, packageMap);
                codeList.push(code);
            });

            const nsSnipetList: uit.snipet.Snipet[] = [];
            nsCodeMap.forEach((codeList, ns) => {
                const nsSnipets = codeList.flat();
                if (ns.length === 0) {
                    nsSnipetList.push(nsSnipets);
                    return;
                }
                nsSnipetList.push(uit.snipet.ts.generator("namespace", ns, nsSnipets));
            });

            const pkgSnipets = uit.snipet.ts.generator("namespace", this.name, nsSnipetList.flat());
            return pkgSnipets;
        }

        /**
         * @description 组件转换成代码片段
         * @author xfy
         * @protected
         * @param {UIComponent} component
         * @param {Map<string, UIPackage>} packageMap
         * @returns {uit.snipet.Snipet[]}
         * @memberof UIPackage
         */
        protected componentEncoding(component: UIComponent, packageMap: Map<string, UIPackage>): uit.snipet.Snipet[] {
            const { name, supertype, controllers, transitions, children } = component;

            // controller names
            const cNames = controllers.length > 0 ? controllers.map(value => `'${value.attributes.name}'`).join('|') : 'string';
            // transition names
            const tNames = transitions.length > 0 ? transitions.map(value => `'${value.attributes.name}'`).join('|') : 'string';

            // children code lines
            const childrenLines: string[] = [];

            children.forEach(child => {
                const { name, attributes } = child;

                const { src } = attributes;

                if (src === undefined) {
                    // 非引用类型
                    childrenLines.push(`${attributes.name}: ${utils.typeMapping(name)};`)
                    return;
                }

                // 属性引用的组件所属包
                const refPkg = attributes.pkg !== undefined ? packageMap.get(attributes.pkg) : this;

                if (refPkg === undefined) {
                    // 剔除属性（属性引用的组件所属包不存在）
                    return;
                }


                // 引用的组件
                const { components } = refPkg;
                const ref = components.get(src);
                if (ref === undefined) {
                    // 剔除属性（属性引用的组件不存在）
                    return;
                }

                if (typeof ref === "string") {
                    // 引用的组件为非自定义组件
                    childrenLines.push(`${attributes.name}: ${ref};`);
                    return;
                }

                // 解析引用路径
                const type = attributes.pkg === undefined ? ref.address : `${refPkg.name}.${ref.address}`;
                childrenLines.push(`${attributes.name}: ${type};`);
            });

            const lines = utils.toComponentSnipets(name, supertype, childrenLines, cNames, tNames);
            return lines;
        }



        /** ================ static ================
         * @description 加载UI包
         * @author xfy
         * @static
         * @param {string} filePath
         * @returns {(UIPackage | undefined)}
         * @memberof UIPackage
         */
        static load(filePath: string): UIPackage | undefined {
            const file = uit.xml2json.load(filePath);
            const root = file?.json.elements
                ?.find(e => e.name === 'packageDescription');
            if (root?.elements === undefined || root?.attributes === undefined) {
                return undefined;
            }

            // 组件列表
            const resources = root.elements.find(e => e.name === 'resources')?.elements
            if (!resources?.length) {
                return undefined;
            }

            // 解析包id
            const rootAttributes: { id: string } = root.attributes;
            const id = rootAttributes.id;
            if (!id) {
                return undefined;
            }

            // 解析UI包发布名
            const publish: { name: string } | undefined = root.elements.find(ele => ele.name === 'publish')?.attributes;
            const name = publish?.name;
            if (!name) {
                return undefined;
            }

            // 包目录
            const directory = uit.path.dirname(filePath);
            return new UIPackage(id, name, directory, resources);
        }
    }

    /**
     * @description 组件配置文件
     * @author xfy
     */
    interface ComponentElement {
        // type name
        name: string;
        // attribute
        attributes: UIComponent["outline"]
    }

}