namespace uit {

    /**@description settings path*/
    const settings_path = './configs/uit-settings.json';

    // FlatSettings
    type FlatSettings = Omit<uit.project.CompilerOptions, 'packages'>;

    /**@description Settings*/
    export type Settings = Record<keyof FlatSettings, {
        // 说明
        name: string;
        // 值
        value: string;
    }>;


    /**@description config*/
    export const settings: Settings = (() => {
        const settingsBuffer = uit.fs.readFileSync(settings_path);
        const settings = JSON.parse(settingsBuffer.toString());
        return settings;
    })();

    /**@description flat settings*/
    export const flatSettings: FlatSettings = Object.entries(settings).reduce(
        (prev, curr) => {
            prev[curr[0] as keyof FlatSettings] = curr[1].value;
            return prev;
        }
        , {} as FlatSettings
    );

    /**@description 合并*/
    function setSettings(name: keyof Settings, value: string) {
        const setting = settings[name];
        if (setting) {
            setting.value = value;
        }
        flatSettings[name] = value;
    }

    /**@description 合并本地设置*/
    export function mergeSettings(settingsObject: Record<keyof Settings, string>) {
        Object.entries(settingsObject).forEach(setting => {
            const [name, value] = setting;
            setSettings(name as keyof Settings, value);
        });

        uit.fs.writeFileSync(settings_path, JSON.stringify(settings));
    }
}