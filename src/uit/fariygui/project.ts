namespace fairygui {

    /**
     * @description fairygui project
     * @author xfy
     * @implements {uit.project.Project}
     */
    export class Project implements uit.project.Project {

        private constructor(
            /**@description 项目目录*/
            readonly directory: string,
            /**@description  包映射列表，键为包ID*/
            readonly packages: Map<string, Package>,
        ) { }

        /**
         * @description 编译项目
         * @author xfy
         * @returns {uit.project.CompilationResult}
         * @memberof Project
         */
        compile(): uit.project.CompilationResult {
            const result: uit.project.CompilationResult = new Map();
            result.set('', createHeaderSnipets());

            this.packages.forEach(pkgConfig => {
                const snpts = this.packageToSnipets(pkgConfig);
                result.set(pkgConfig.name, snpts);
            });
            return result;
        }

        /**
         * @description 解析包生成代码片段
         * @author xfy
         * @param {PackageConfig} pkgConfig
         * @returns {uit.snipet.Snipet[]}
         * @memberof Project
         */
        packageToSnipets(pkgConfig: Package): uit.snipet.Snipet[] {
            // 根据包内命名空间把组件代码分组
            const nsSnipetMap: Map<string, uit.snipet.Snipet[]> = new Map();
            pkgConfig.components.forEach(component => {
                if (typeof component === 'string') {
                    // 非自定义组件
                    return;
                }

                // 组件代码片段
                const componentSnpts = this.componentToSnipets(component, pkgConfig);

                // 解析组件名和名命名空间
                const { innerNS } = component;

                // 根据命名空间分组
                const existing = nsSnipetMap.get(innerNS);
                const nsSnipets = existing ?? [];
                if (existing === undefined) {
                    nsSnipetMap.set(innerNS, nsSnipets);
                }
                nsSnipets.push(...componentSnpts);
            });

            // 根据名命名空间组合包内所有代码
            const pkgSnpts: uit.snipet.Snipet[] = [];
            nsSnipetMap.forEach((snpts, ns) => {
                const nsSnpts = ns.length > 0 ? uit.snipet.ts.generator('namespace', ns, snpts) : snpts;
                pkgSnpts.push(...nsSnpts);
            });
            return uit.snipet.ts.generator('namespace', pkgConfig.name, pkgSnpts);
        }



        /**
         * @description 解析组件生成代码片段
         * @author xfy
         * @param {Component} component
         * @param {pkgConfig} Package
         * @returns {uit.snipet.Snipet[]}
         * @memberof Project
         */
        componentToSnipets(component: Component, pkgConfig: Package): uit.snipet.Snipet[] {
            // controller names
            const controllerNames = component.config.controllers?.join('|') ?? 'string';
            // transition names
            const transitionNames = component.config.transitions?.join('|') ?? 'string';
            // 扩展类型
            const extention = utils.typeMapping(component.config.extention ?? 'component');
            // 属性列表
            const attributeSnpts = this.attributesToSnipets(component, pkgConfig);
            return [
                `type ${component.name} = ${extention} & __UIComponent<{`,
                attributeSnpts,
                `}, ${controllerNames}, ${transitionNames}>;`
            ];
        }

        /**
         * @description  解析属性生成代码片段
         * @author xfy
         * @param {Component} component
         * @param {pkgConfig} Package
         * @returns {uit.snipet.Snipet[]}
         * @memberof Project
         */
        protected attributesToSnipets(component: Component, pkgConfig: Package): uit.snipet.Snipet[] {
            const { packages } = this;

            // 解析属性列表
            const attributes: uit.snipet.Snipet[] = [];
            component.config.children?.forEach(attribute => {
                if (!attribute.src) {
                    // 非引用类型
                    attributes.push(`${attribute.name}: ${attribute.type};`);
                    return;
                }

                // 属性引用的组件所属包
                const refPkgCFG = attribute.pkg ? packages.get(attribute.pkg) : pkgConfig;

                if (refPkgCFG === undefined) {
                    // 剔除属性（属性引用的组件所属包不存在）
                    return;
                }

                // 属性引用的组件
                const refComponent = refPkgCFG.components.get(attribute.src);
                if (refComponent === undefined) {
                    // 剔除属性（属性引用的组件不存在）
                    return;
                }

                // 属性引用的组件地址
                const type = typeof refComponent === 'string' ?
                    refComponent
                    :
                    (attribute.pkg === undefined ? refComponent.address : `${refPkgCFG.name}.${refComponent.address}`);
                attributes.push(`${attribute.name}: ${type};`);
            });

            return attributes;
        }



        // ================== static ===================

        /**
         * @description 读取项目
         * @author xfy
         * @static
         * @param {string} directory    包的根目录
         * @param {string[]} [specifiedPkgs]    将要解析的包名，不指定则加载根目录下的所有包
         * @returns {(Project | undefined)}
         * @memberof Project
         */
        static read(directory: string, specifiedPkgs?: string[]): Project | undefined {
            if (!uit.fs.existsSync(directory)) {
                console.log(`项目根目录不存在！(${directory})`);
                return undefined;
            }

            // 解析包列表
            const names = specifiedPkgs?.length ? specifiedPkgs : uit.fs.readdirSync(directory);
            const files = names.map(n => uit.path.join(directory, n, 'package.xml'));

            const packages: Map<string, Package> = new Map();
            for (const file of files) {
                const cfg = Package.load(file);
                if (cfg) {
                    packages.set(cfg.id, cfg);
                }
            }
            return new Project(directory, packages);
        }

    }



    /**
     * @description 创建顶层类型对象
     * @author xfy
     * @param {string} [name='__UIComponent']
     * @returns {uit.snipet.Snipet[]}
     */
    function createHeaderSnipets(name: string = '__UIComponent'): uit.snipet.Snipet[] {
        return [
            `type ${name}<Children, Controllers extends string = string, Transitions extends string = string> = {`,
            [
                'getChild<Key extends keyof Children>(name: Key): Children[Key];',
                'getController(name: Controllers): fairygui.Controller;',
                'getTransition(transName: Transitions): fairygui.Transition;'
            ],
            '};'
        ];
    }

}