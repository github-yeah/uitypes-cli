namespace cli.settings {

    /** @description compiler loader*/
    export const loader: cli.loader.CommandLoader = program => {
        const cmd = program
            .command('settings')
            .alias('s')
            .description('本地设置，不设置参数则输出已有设置');



        const settings = uit.settings;
        const keys = Reflect.ownKeys(settings) as (keyof typeof settings)[];
        keys.forEach(key => {
            const item = settings[key];
            if (item === undefined) {
                return;
            }
            const valueOption = item.optional ? `[${key}]` : `<${key}>`;
            cmd.option(`--${key} ${valueOption}`, item.name);
        })
        cmd.action(settingsAction);
    }

    /**@description settings action*/
    function settingsAction(options: Partial<typeof uit.flatSettings>) {
        if (Reflect.ownKeys(options).length === 0) {
            console.log(uit.settings);
            return;
        }
        uit.merge(options);
    }
}