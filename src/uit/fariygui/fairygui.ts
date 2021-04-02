namespace fairygui {

    /** @description fairygui compiler*/
    export const compiler: uit.project.Compiler = options => {
        const { input, packages } = options;
        if (!uit.fs.existsSync(input)) {
            console.log(`项目根目录不存在！(${input})`);
            return [];
        }

        const pkgNames = packages?.length ? packages : uit.fs.readdirSync(input);
        if (pkgNames.length < 1) {
            return [];
        }

        const pkgFiles = pkgNames.map(name => uit.path.join(input, name, 'package.xml'));

        return read(pkgFiles);
    }

    /**
     * @description 读取UI包
     * @author xfy
     * @export
     * @param {string[]} files
     * @returns {uit.project.Package[]}
     */
    export function read(files: string[]): uit.project.Package[] {
        const packageConfigMap: Record<string, PKG.Config | undefined> = {};
        const packageConfigs: PKG.Config[] = [];
        for (const file of files) {
            const config = PKG.readConfig(file);
            if (config) {
                packageConfigMap[config.id] = config;
                packageConfigs.push(config);
            }
        }

        const packageList: uit.project.Package[] = [];
        for (const packageConfig of packageConfigs) {
            const componentConfigs = Object.values(packageConfig.components);

            // 获取包内 component列表
            const components: uit.project.Component<Component.RefAttribute>[] = [];
            packageList.push({
                id: packageConfig.id,
                name: packageConfig.name,
                components: components
            });

            componentConfigs.forEach(cfg => {
                const component = fairygui.Component.readComponent(cfg);
                if (!component) {
                    return;
                }
                components.push(component);

                // 修正属性的类型 ------------------------
                const attributes = component.attributes;
                attributes.forEach(attribute => {

                    const { componentID, packageID } = attribute;
                    if (componentID === undefined) {
                        // 不是引用类型的组件
                        return;
                    }

                    // 属性引用的组件所在的包配置
                    const refPackageCFG = packageID ? packageConfigMap[PKG.underscored(packageID)] : packageConfig;
                    if (!refPackageCFG) {
                        return;
                    }

                    // 查找包内是否存在此导出的组件
                    const refComponentCfg = refPackageCFG.components[componentID];
                    if (!refComponentCfg || !refComponentCfg.exported) {
                        return;
                    }

                    const innerPkg = refComponentCfg.package.length > 0 ? `${refComponentCfg.package}.` : '';
                    const outerPkg = packageID?.length ? `${PKG.underscored(packageID)}.` : '';
                    attribute.type = `${attribute.type} & ${outerPkg}${innerPkg}${refComponentCfg.name}`;
                });


            });


        }

        return packageList;
    }

}