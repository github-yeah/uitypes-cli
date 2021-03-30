namespace cli.settings {

    /** @description compiler loader*/
    export const loader: cli.loader.CommandLoader = program => {
        const cmd = program
            .command('settings')
            .alias('s')
            .description('本地设置，不设置参数则输出已有设置');

        Object.entries(uit.settings).forEach(value => {
            const [name, setting] = value;
            cmd.option(`--${name} <${name}>`, setting.name);
        });

        cmd.action(settingsAction);
    }

    /**@description settings action*/
    function settingsAction(options: Record<keyof uit.Settings, string>) {
        if (Object.keys(options).length === 0) {
            console.log(uit.settings);
            return;
        }
        uit.mergeSettings(options);
    }
}