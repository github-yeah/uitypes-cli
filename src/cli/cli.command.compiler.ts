namespace cli.compiler {

    /** @description compiler loader*/
    export const loader: cli.loader.CommandLoader = program => {
        const cmd = program
            .command('compile [packages...]')
            .alias('c')
            .description(
                '编译 [包目录...]',
                {
                    packages: '包目录列表'
                }
            )

        Object.entries(uit.settings).forEach(value => {
            const [name, setting] = value;
            cmd.option(`--${name} <${name}>`, setting.name)
        });

        cmd.action(compile);
    }

    /**
     * @description
     * @author xfy
     * @param {string[]} packages
     * @param {Partial<Record<keyof uit.Settings, string>>} options
     */
    function compile(packages: string[], options: Partial<uit.project.CompilerOptions>) {
        options.packages = packages;
        const compilerOptions = {
            ...uit.flatSettings,
            ...options,
        }

        const input = compilerOptions.input ?? '';
        compilerOptions.input ??= uit.path.isAbsolute(input) ? input : uit.path.join(process.cwd(), input);
        uit.project.compile(compilerOptions);
    }
}