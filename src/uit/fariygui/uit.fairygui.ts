namespace uit.fairygui {
    /** @description 匹配无用名字（fariygui自动生成的名字或者纯数字名字）*/
    const useless_name_reg = /^(\-|[0-9]|n[0-9]*$)/;    // 数字或负号开头+n开头数字结尾

    /**@description 包配置文件名称*/
    const package_file = 'package.xml';

    /**@description UI 编译器*/
    export const compiler: uit.project.Compiler = options => {
        const { input, packages: pkgs } = options;
        if (!uit.fs.existsSync(input)) {
            console.log(`项目根目录不存在！(${input})`);
            return [];
        }

        const pkgNames = pkgs?.length ? pkgs : uit.fs.readdirSync(input);
        if (pkgNames.length < 1) {
            return [];
        }

        const packageMap: Record<string, FGUIPackage> = {};
        const packages: uit.project.Package[] = [];
        for (const pkgName of pkgNames) {
            const pkgPath = uit.path.join(input, pkgName, package_file);
            const pkg = loadUIPackage(pkgPath);
            if (pkg) {
                packages.push(pkg);
                packageMap[pkg.id] = pkg;
            }
        }

        // 设置引用类型（必须等所有包解析完成后再查看是否存在引用类型）
        setReferenceAttributes(packageMap);
        return packages;
    };

    /**
     * @description 加载UI包
     * @author xfy
     * @export
     * @param {string} filePath
     * @returns {(FGUIPackage | undefined)}
     */
    export function loadUIPackage(filePath: string): FGUIPackage | undefined {
        const data = uit.xml2json.load(filePath);
        const json = data?.json as PKGFile | undefined;
        if (!json) {
            return undefined;
        }

        const element = json?.packageDescription.resources.component;
        if (!element) {
            return undefined;
        }

        const elements = [element].flat();
        if (elements.length === 0) {
            return undefined;
        }

        const basePath = uit.path.dirname(filePath);
        // 发布的包名
        const publishPkgName = json?.packageDescription.publish._attributes?.name ?? 'unknown';
        // 包id
        const pkgID = json?.packageDescription._attributes?.id ?? 'unknown';

        const comonentsMap: Record<string, FGUIComponent> = {};
        const referenceAttributes: FGUIComponent["referenceAttributes"] = [];
        const components = elements.reduce(
            (map, ele) => {
                if (!ele._attributes) {
                    return map;
                }

                // 未导出组件的忽略， 如果忽略的话，未导出的组件引用类型将变成通用类型
                // if (!ele._attributes.exported) {
                //     return map;
                // }

                // 组件相对路径
                const cmptPath = uit.path.join(basePath, ele._attributes.path, ele._attributes.name);
                // 组件所在包
                const cmptPkgName = uit.utils.toRefrence(ele._attributes.path);
                const component = loadUIComponent(cmptPath);
                if (component) {
                    const existing = map[cmptPkgName];
                    const componentList = existing ?? [];
                    if (!existing) {
                        map[cmptPkgName] = componentList;
                    }
                    component.package = cmptPkgName;
                    componentList.push(component);
                    const middlePkg = cmptPkgName.length > 0 ? `${cmptPkgName}.` : '';
                    comonentsMap[`${publishPkgName}.${middlePkg}${component.name}`] = component;
                    referenceAttributes.push(...component.referenceAttributes);
                }

                return map;
            }
            , {} as FGUIPackage["components"]
        );


        return {
            id: pkgID,
            raw: data!.raw,
            name: publishPkgName,
            json,
            components,
            comonentsMap,
            referenceAttributes
        };
    }

    /**
     * @description  加载 UIComponent
     * @author xfy
     * @param {string} filePath
     * @returns {(FGUIComponent | undefined)}
     */
    function loadUIComponent(filePath: string): FGUIComponent | undefined {
        const data = uit.xml2json.load(filePath);
        const json = data?.json as ComponentFile | undefined;
        if (!json) {
            return undefined;
        }

        const attributes: FGUIComponent["attributes"] = [];
        const referenceAttributes: FGUIComponent["referenceAttributes"] = [];
        const existingAttributes: Record<string, boolean> = {};
        const displayList = json.component.displayList;

        for (const type in displayList) {

            const element = displayList[type];
            // 相同type的element列表
            const elements = [element].flat();

            elements.forEach(ele => {

                const { _attributes } = ele;
                if (!_attributes) {
                    return;
                }

                const { name } = _attributes;
                if (!name || useless_name_reg.test(name) || existingAttributes[name] === true) {
                    // 剔除不符合规则的element
                    return;
                }

                // 防止重名（如果重名只取第一个）
                existingAttributes[name] = true;
                const attribute = {
                    name,
                    type: typeMapping(type),
                    _raw: _attributes
                };
                attributes.push(attribute);
                if (_attributes.fileName) {
                    referenceAttributes.push(attribute);
                }
            });
        }

        if (attributes.length === 0) {
            return undefined;
        }

        const name = uit.utils.rejectExtension(uit.path.basename(filePath));
        return {
            name,
            attributes,
            referenceAttributes
        }
    }


    /**
     * @description 设置引用类型
     * @author xfy
     * @param {Record<string, uit.project.Package>} packageMap
     */
    function setReferenceAttributes(packageMap: Record<string, FGUIPackage>): void {
        Object.values(packageMap).forEach(pkg => {
            if (pkg.referenceAttributes.length > 0) {
                pkg.referenceAttributes.forEach(attribute => {
                    const { _raw } = attribute;
                    if (!_raw || !_raw.fileName) {
                        return;
                    }

                    const referrecePkg = _raw.pkg ? packageMap[_raw.pkg] : pkg;
                    if (referrecePkg) {
                        const refPackge = `${referrecePkg.name}.${uit.utils.toRefrence(_raw.fileName)}`;
                        if (referrecePkg.comonentsMap[refPackge])
                            attribute.type = `${refPackge} & ${attribute.type}`;
                    }
                });
            }

        });
    }

    /**
     * @description 类型映射
     * @author xfy
     * @param {string} type
     * @returns {string}
     */
    function typeMapping(type: string): string {
        const existing = Mapping[type];
        if (existing) {
            return existing;
        }

        if (type.length < 1) {
            return type;
        }
        return `fairygui.G${type.substr(0, 1).toUpperCase()}${type.substr(1)}`
    }

    /**@description fairygui package*/
    type FGUIPackage = uit.project.Package & {
        // 包的id
        id: string;
        // 元数据
        raw: string;
        // json
        json: PKGFile;
        // 映射
        comonentsMap: Record<string, FGUIComponent>;
        // 引用组件（需要单独判断，被引用的组件是否导出）
        referenceAttributes: FGUIComponent["referenceAttributes"];
    };

    /**@description fairygui package*/
    type FGUIComponent = uit.project.Component & {
        attributes: {
            name: string;
            type: string;
            _raw: ComponentElement["_attributes"]
        }[];
        // 引用类型的属性
        referenceAttributes: {
            name: string;
            type: string;
            _raw: ComponentElement["_attributes"]
        }[]
    };



    // package.xml json
    type PKGFile = uit.xml2json.X2JElement<undefined, { version: string, encoding: string }> & {
        packageDescription: uit.xml2json.X2JElement<{ id: string }> & {
            resources: uit.xml2json.X2JElement & {
                component?: PKGElement | PKGElement[]
            };
            publish: uit.xml2json.X2JElement<{ name: string }>
        }
    };

    // package.xml json
    type PKGElement = uit.xml2json.X2JElement<{
        name: string;
        path: string;
        exported?: boolean;
    }>;


    // component.xml json
    type ComponentFile = uit.xml2json.X2JElement<undefined, { version: string, encoding: string }> & {
        component: uit.xml2json.X2JElement & {
            displayList: {
                [n: string]: ComponentElement | ComponentElement[]
            };
        }
    };

    // component.xml json
    type ComponentElement = uit.xml2json.X2JElement<
        {
            id: string;
            name: string;
            // 有fileName表示连接的是自定义组件，而不是通用组件
            fileName?: string;
            // 有 pkg则fileName的路径为相对于pkg的路径
            pkg?: string;
        }
    >;
}

namespace uit.fairygui {
    export const Mapping: Record<string, string> = {
        text: 'fairygui.GTextField',
        richtext: 'fairygui.GRichTextField'
    };
}