/// <reference path="./cli/cli.command.compiler.ts"/>
/// <reference path="./cli/cli.command.settings.ts"/>

namespace cli.loader {
    /**loaders*/
    const loaders: CommandLoader[] = [
        cli.compiler.loader,
        cli.settings.loader
    ];






    /**
     * @description 加载所有命令
     * @author xfy
     * @export
     * @param {Program} program
     */
    export function loadCommands(program: Program): void {
        loaders.forEach(loader => loader(program));
    }

    /**
     * @description CommandLoader
     * @author xfy
     */
    export interface CommandLoader {
        (program: Program): void;
    }

    type Program = any;
}