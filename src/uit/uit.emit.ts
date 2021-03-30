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
                if (stats.isFile()) {
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
        const { name, components } = pkg;
        const snipets = Object.entries(components).reduce(
            (packageSnipets, [componentPkg, componentList]) => {
                const componentSnipets = componentToSnipts(componentList, componentPkg);
                packageSnipets.push(...componentSnipets)

                return packageSnipets;
            }
            , [] as uit.snipet.Snipet[]
        );

        if (name.length > 0) {
            const ns = rootNameSpace ? `${rootNameSpace}.${name}` : name;
            return uit.snipet.generator('namespace', ns, snipets, rootNameSpace ? 'declare' : undefined);
        }
        return snipets;
    }

    /**
     * @description Component =>  uit.snipet.Snipet[]
     * @author xfy
     * @export
     * @param {(uit.project.Component | uit.project.Component[])} components
     * @returns {uit.snipet.Snipet[]}
     */
    export function componentToSnipts(components: uit.project.Component | uit.project.Component[], packageName?: string): uit.snipet.Snipet[] {
        components = Array.isArray(components) ? components : [components];
        const snipets = components.reduce(
            (snpts, component) => {
                const { name, attributes } = component;
                const contents = attributes.map(attribute => `${attribute.name}: ${attribute.type};`);
                const componentSnipts = uit.snipet.generator("interface", name, contents);
                snpts.push(...componentSnipts);
                return snpts;
            }
            , [] as uit.snipet.Snipet[]
        );

        if (packageName && packageName.length > 0) {
            return uit.snipet.generator("namespace", packageName, snipets);
        }

        return snipets;
    }
}

