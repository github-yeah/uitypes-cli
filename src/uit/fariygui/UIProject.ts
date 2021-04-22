namespace fairygui {



    /**
     * @description UIProject
     * @author xfy
     * @export
     * @class UIProject
     * @implements {uit.project.Project}
     */
    export class UIProject implements uit.project.Project {
        private constructor(
            /**@description 项目目录*/
            readonly directory: string,
            /**@description  包映射列表，键为包ID*/
            readonly packages: Map<string, UIPackage>,
        ) { }

        private result?: uit.project.CompilationResult;

        /**
         * @description 编译项目
         * @author xfy
         * @returns {uit.project.CompilationResult}
         * @memberof Project
         */
        compile(): uit.project.CompilationResult {
            if (this.result !== undefined) {
                return this.result;
            }
            const result: uit.project.CompilationResult = new Map();
            result.set('', utils.createHeaderSnipets());
            const { packages } = this;
            packages.forEach(pkg => {
                const snpts = pkg.encoding(packages);
                result.set(pkg.name, snpts);
            });
            this.result = result;
            return result;
        }

        /** ================== static ===================
         * @description 读取项目
         * @author xfy
         * @static
         * @param {string} directory    包的根目录
         * @param {string[]} [specifiedPkgs]    将要解析的包名，不指定则加载根目录下的所有包
         * @returns {(uit.project.Project | undefined)}
         * @memberof UIProject
         */
        static read(directory: string, specifiedPkgs?: string[]): uit.project.Project | undefined {
            if (!uit.fs.existsSync(directory)) {
                console.log(`项目根目录不存在！(${directory})`);
                return undefined;
            }

            // 解析包列表
            const names = specifiedPkgs?.length ? specifiedPkgs : uit.fs.readdirSync(directory);
            const files = names.map(n => uit.path.join(directory, n, 'package.xml'));

            const packages: Map<string, UIPackage> = new Map();
            for (const file of files) {
                const pkg = UIPackage.load(file);
                if (pkg) {
                    packages.set(pkg.id, pkg);
                }
            }
            return new UIProject(directory, packages);
        }

    }


}