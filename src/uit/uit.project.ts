namespace uit.project {

    type Options = typeof uit.flatSettings;

    /** @description 编译选项*/
    export interface CompilerOptions extends Options {
        // 待编译 ui包列表
        packages?: string[];
    };

    /**
     * @description 编译结果，按包分类的代码片段列表 - {包名: 包的代码片段列表}
     * - 按包分类的代码片段列表
     * - 结构 - {包名: 相同包的代码片段列表}
     * @author xfy
     */
    export type CompilationResult = Map<string, uit.snipet.Snipet[]>;

    /**
     * @description 项目
     * @author xfy
     * @export
     * @interface Project
     */
    export interface Project {
        /**
         * @description 编译
         * @author xfy
         * @returns {CompilationResult}
         * @memberof Project
         */
        compile(): CompilationResult;
    }

    /**
     * @description 编译
     * @author xfy
     * @export
     * @param {CompilerOptions} options
     * @param {ProjectGenerator} generator
     */
    export function compile(options: CompilerOptions): void {
        const timeLabel = '编译完成，耗时';
        console.time(timeLabel);
        const project = projectFactory(options);
        if (project) {
            const result = project.compile();
            uit.emit(result, options);
        }
        console.timeEnd(timeLabel);
    }

    /**
     * @description 项目工厂（暂时只支持fairygui项目）
     * @author xfy
     * @param {CompilerOptions} options
     * @returns {(Project | undefined)}
     */
    function projectFactory(options: CompilerOptions): Project | undefined {
        return fairygui.UIProject.read(options.input, options.packages);
    }
}