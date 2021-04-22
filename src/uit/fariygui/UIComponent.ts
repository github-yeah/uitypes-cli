namespace fairygui {
    /**
     * @description 组件
     * @author xfy
     * @export
     * @class UIComponent
     */
    export class UIComponent {
        /**@description 组件名称*/
        readonly name: string;

        /**@description 组件的命名空间*/
        readonly ns: string;

        /**@description 组件的包内引用地址*/
        readonly address: string;

        /**@description 组件父类型*/
        readonly supertype: string;

        /**@description Controller list*/
        readonly controllers: Readonly<Controller>[];

        /**@description Transition list*/
        readonly transitions: Readonly<Transition>[];

        /**@description Children*/
        readonly children: Readonly<Child>[];

        private constructor(readonly outline: ComponentOutline, feature: uit.xml2json.Element) {
            const _n = uit.utils.rejectExtension(outline.name);
            this.name = _n;
            const _ns = uit.utils.toRefrence(outline.path);
            this.ns = _ns;
            this.address = _ns.length > 0 ? `${_ns}.${_n}` : _n;
            this.controllers = [];
            this.transitions = [];
            this.children = [];

            // 读取扩展类型
            const outlineAttributes: { extention?: string } | undefined = feature.attributes;
            this.supertype = utils.typeMapping(outlineAttributes?.extention ?? 'component');

            // 读取features
            if (feature.elements === undefined) {
                return;
            }

            const { controllers, transitions } = this;
            for (const e of feature.elements) {
                switch (e.name) {
                    case 'displayList':
                        if (e.elements !== undefined) {
                            this.readChildren(e.elements as Child[])
                        }
                        break;
                    case 'controller':
                        if (e.attributes !== undefined) {
                            controllers.push(e as ItemElement<any>);
                        }
                        break;
                    case 'transition':
                        if (e.attributes !== undefined) {
                            transitions.push(e as ItemElement<any>);
                        }
                        break;
                }
            }
        }

        /**
         * @description 读取字显示对象列表
         * @author xfy
         * @protected
         * @param {Child[]} elements
         * @memberof UIComponent
         */
        protected readChildren(elements: Child[]): void {
            const { children } = this;
            // 已存在的属性名，防止重名（重名的使用第一个）
            const existing: Record<string, true | undefined> = {};
            for (const element of elements) {
                const name = element.attributes.name;
                // 剔除重复名字和不合规的名字（比如数字开头的或fgui自定义的名字: n1, n...999）
                if (existing[name] !== true && utils.isLegalName(name)) {
                    // 设置组件基本类型
                    element.attributes.type = element.name;
                    existing[name] = true;
                    children.push(element);
                }
            }
        }

        /** ================ static ================
         * @description 加载组件
         * @author xfy
         * @static
         * @param {ComponentOutline} outline
         * @param {string} basePath
         * @returns {(UIComponent | undefined)}
         * @memberof UIComponent
         */
        static load(outline: ComponentOutline, basePath: string): UIComponent | undefined {
            const { path, name } = outline;
            const filePath = uit.path.join(basePath, path, name);
            const file = uit.xml2json.load(filePath);
            const feature = file?.json.elements
                ?.find(e => e.name === 'component');
            if (!feature) {
                return undefined;
            }
            return new UIComponent(outline, feature);
        }

    }

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
     * @description ItemElement
     * @author xfy
     * @interface ItemElement
     * @template T
     */
    interface ItemElement<T> {
        // type name
        name: string;
        // attribute
        attributes: T
    }

    /**@description Controller*/
    interface Controller extends ItemElement<{
        name: string;
    }> { };

    /**@description Transition*/
    interface Transition extends ItemElement<{
        name: string;
    }> { };

    /**@description Child*/
    interface Child extends ItemElement<{
        /** @description 属性id */
        id: string;

        /** @description 属性名称*/
        name: string;

        /** 
         * @description 属性引用的组件的配置文件路径
         * - 组件所属包目录的相对路径
        */
        fileName: string;

        /**
         * @description 属性引用的组件的id
         * - 如果不存在则使用 fairygui内置属性
         * */
        src?: string;

        /**
         * @description 属性引用的组件所属UI包的包id.
         * - 如果不存在则表示引用的是属性所属组件包的包内组件
         * */
        pkg?: string;

        /** @description 属性引用的组件内置类型（当`src`不存在时，使用此属性解析内置组件类型）*/
        type: string;
    }> { };
}