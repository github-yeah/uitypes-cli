namespace cli {

    /**@description commander*/
    const program = require('commander');

    /**@description chalk*/
    const chalk = require('chalk');

    /**@description startup*/
    export function startup(): void {
        // 基础信息
        program
            .version(
                require('../package.json').version,
                '-v, --version',
                'uitypes-cli 版本.'
            )
            .usage('<command> [options]')
            .helpOption('-h, --help', '帮助.');


        // 处理无效命令
        invalidCommandHandler();
        // 加载命令列表
        cli.loader.loadCommands(program);

        program.parse(process.argv);
        const [, , cmd] = process.argv;
        if (cmd === undefined) {
            program.outputHelp();
        }

    };

    /**
     * @description 处理无效命令
     * @author xfy
     * @param {CommanderStatic} program
     */
    function invalidCommandHandler(): void {
        program.on("command:*", () => {
            console.error(`[ERROR]\n无效命令：${chalk.red(program.args.join(" "))}`);
            console.log(`[Log] 使用${chalk.red('--help')}查看命令列表`);
        });
    }
}