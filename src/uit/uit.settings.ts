namespace uit {

    /**@description settings path*/
    const settings_path = uit.path.resolve(__dirname, 'configs/uit-settings.json');

    /**@description SettingItem*/
    type SettingItem = {
        // 说明
        name: string;
        // 值
        value: string;
        // 是否是可选的（可选的设置可以设置空值）
        optional?: true;
    };

    /**
     * @description 设置类型
     * @author xfy
     */
    export interface Settings {
        // UI 根目录
        input: SettingItem;
        // 输出路径
        output: SettingItem;
        // 主命名空间
        ns: SettingItem;
        // 如果所有的component公用一个d.ts文件，请设置此项（文件名，不含后缀）
        outFile: SettingItem
    }

    // FlatSettings
    type FlatSettings = {
        [k in keyof Settings]: string;
    }

    /**@description 设置*/
    export const settings: Settings = (() => {
        const settingsBuffer = uit.fs.readFileSync(settings_path);
        const settings = JSON.parse(settingsBuffer.toString());
        return settings;
    })();


    /**@description flat settings*/
    export const flatSettings: FlatSettings = Object.entries(settings).reduce(
        (data, curr) => {
            data[curr[0] as keyof FlatSettings] = curr[1].value;
            return data;
        }
        , {} as FlatSettings
    );

    /**@description 合并*/
    function mergeSettings(name: keyof Settings, value: string | undefined) {
        const setting = settings[name];
        if (setting) {
            setting.value = value ?? '';
        }
        flatSettings[name] = value ?? '';
    }

    /**@description 合并本地设置*/
    export function merge(data: Partial<FlatSettings>) {
        const keys = Reflect.ownKeys(data) as (keyof FlatSettings)[];
        keys.forEach(key => {
            const value = data[key];
            mergeSettings(key, typeof value === "string" ? value : undefined);
        });

        uit.fs.writeFileSync(settings_path, JSON.stringify(settings));
    }
}