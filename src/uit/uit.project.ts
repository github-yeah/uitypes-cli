namespace uit.project {
    /**
     * @description 启动 project
     * @author xfy
     * @export
     * @param {CompilerOptions} options
     * @param {Compiler} compiler
     */
    export function startup(options: CompilerOptions, compiler: Compiler): void {
        const packages = compiler(options);
        uit.emit(packages, options);
    }

    /**
     * @description 组件
     * @author xfy
     */
    export interface Component {
        // 组件名称
        name: string;
        // 包名
        package?: string;
        // 子显示对象列表
        attributes: {
            // 名称
            name: string;
            // 类型
            type: string;
        }[];
    };

    /**
     * @description UI Package
     * @author xfy
     */
    export interface Package {
        // 包名
        readonly name: string;
        // components{组件包名: 相同包下的组件列表}
        readonly components: Record<string, Component[]>;
    };

    /** @description 编译选项*/
    export interface CompilerOptions {
        // UI 根目录
        input: string;
        // 输出路径
        output: string;
        // 主命名空间
        ns: string;
        // 如果所有的component公用一个d.ts文件，请设置此项（文件名，不含后缀）
        outFile?: string
        // ui 包列表
        packages?: string[];
    };

    /**
     * @description 编译器
     * @author xfy
     */
    export interface Compiler {
        /**
         * @description 编译
         * @param {CompilerOptions} options 编译选项
         * @returns {(Component[] | undefined)}
         */
        (options: CompilerOptions): Package[];
    };
}