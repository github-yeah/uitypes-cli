namespace uit {
    /**
     * @description emit
     * @author xfy
     * @export
     * @param {project.CompilationResult} result 编译结果
     * @param {uit.project.CompilerOptions} options 编译选项
     * @returns {void}
     */
    export function emit(result: project.CompilationResult, options: uit.project.CompilerOptions): void {
        const { outFile, output, ns } = options;

        if (!uit.fs.existsSync(output)) {
            // 没有文件夹则创建文件夹
            uit.utils.mkDirForce(output);
        }
        else {
            // 有文件夹则清理文件夹内的输出文件
            uit.fs.readdirSync(output).forEach(file => {
                const filePath = uit.path.join(output, file);
                const stats = uit.fs.statSync(filePath);
                if (stats.isFile() && /\.d\.ts$/.test(filePath)) {
                    uit.fs.unlinkSync(filePath);
                }
            });
        }

        if (outFile === undefined) {
            // 每个包写入单独文件
            result.forEach((pkgSnipets, pkgName) => {
                const outputPkgSnipets = uit.snipet.ts.generator('namespace', ns, pkgSnipets, 'declare');
                save(`${output}/${ns}.${pkgName}.d.ts`, uit.snipet.toString(outputPkgSnipets));
            });
            return;
        }

        // 写入同一个文件
        const allPkgSnipets: uit.snipet.Snipet[] = [];
        result.forEach(pkgSnipets => {
            allPkgSnipets.push(...pkgSnipets);
        });
        const outputSnipets = uit.snipet.ts.generator('namespace', ns, allPkgSnipets, 'declare');
        save(`${output}/${outFile}.d.ts`, uit.snipet.toString(outputSnipets));
    }


    /**
     * @description 保存
     * @author xfy
     * @param {string} file
     * @param {string} contents
     */
    function save(file: string, contents: string): void {
        contents = `/**const view = fairygui.UIPackage.createObject('pkg', 'pkgRes') as uit.xxx.xxxx*/\n${contents}`;
        uit.fs.writeFileSync(file, contents);
    }
}

