namespace uit {
    /**
     * @description emit
     * @author xfy
     * @export
     * @param {uit.project.Package[]} packages
     * @param {uit.project.CompilerOptions} options
     * @returns {void}
     */
    export function emit(packages: uit.project.Package[], options: uit.project.CompilerOptions): void {
        if (!packages || packages.length === 0) {
            return;
        }

        const { outFile, output, ns } = options;

        if (!uit.fs.existsSync(output)) {
            // 没有文件夹则创建文件夹
            uit.fs.mkdirSync(output);
        }
        else {
            // 有文件夹则清理文件夹
            uit.fs.readdirSync(output).forEach(file => {
                const filePath = uit.path.join(output, file);
                const stats = uit.fs.statSync(filePath);
                if (stats.isFile() && /\.d\.ts$/.test(filePath)) {
                    uit.fs.unlinkSync(filePath);
                }
            });
        }

        const snipets = packages.reduce(
            (snpts, pkg) => {
                const packageSnipts = packageToSnipets(pkg, outFile ? undefined : ns);
                const packageCode = uit.snipet.toString(packageSnipts);
                if (outFile) {
                    snpts.push(...packageSnipts);
                }
                else {
                    uit.fs.writeFileSync(`${output}/${ns}.${pkg.name}.d.ts`, packageCode);
                }
                return snpts;
            }
            , [] as uit.snipet.Snipet[]
        );

        if (snipets.length === 0) {
            return;
        }

        const outputSnipets = uit.snipet.generator('namespace', ns, snipets, 'declare');
        uit.fs.writeFileSync(`${output}/${outFile}.d.ts`, uit.snipet.toString(outputSnipets));
    }

    /**
     * @description UIPackage =>  uit.snipet.Snipet[]
     * @author xfy
     * @export
     * @param {uit.project.Package} pkg
     * @param {string} [rootNameSpace]
     * @returns {uit.snipet.Snipet[]}
     */
    export function packageToSnipets(pkg: uit.project.Package, rootNameSpace?: string): uit.snipet.Snipet[] {
        const { id, name, components } = pkg;

        // 根据组件包分组
        const group: Record<string, uit.snipet.Snipet[]> = {};
        for (const component of components) {
            const existing = group[component.package];
            const snpts = existing ?? [];
            if (!existing) {
                group[component.package] = snpts;
            }
            const componentSnpts = snipetsOfComponent(component);
            snpts.push(...componentSnpts);
        }

        const snipets: uit.snipet.Snipet[] = [];
        for (const pkg in group) {
            const snpts = group[pkg];
            if (pkg.length > 0) {
                snipets.push(...uit.snipet.generator('namespace', pkg, snpts));
            }
            else {
                snipets.push(...snpts);
            }
        }


        if (name.length > 0) {
            const nsSnipts = uit.snipet.generator('namespace', name, snipets);
            // 设置包的命名空间别名
            nsSnipts.unshift(`export import ${id} = ${name};`);
            if (rootNameSpace) {
                return uit.snipet.generator('namespace', rootNameSpace, nsSnipts, 'declare');
            }

            return nsSnipts;
        }
        return snipets;
    }

    /**
     * @description Component =>  uit.snipet.Snipet[]
     * @author xfy
     * @export
     * @param {uit.project.Component} component
     * @param {string} [packageName]
     * @returns {uit.snipet.Snipet[]}
     */
    export function snipetsOfComponent(component: uit.project.Component, packageName?: string): uit.snipet.Snipet[] {
        const { name, attributes } = component;
        const contents = attributes.map(attribute => `${attribute.name}: ${attribute.type};`);
        const snipets = uit.snipet.generator("interface", name, contents);

        if (packageName && packageName.length > 0) {
            return uit.snipet.generator("namespace", packageName, snipets);
        }
        return snipets;
    }
}

