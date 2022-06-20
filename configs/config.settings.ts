import { join } from "path";
import { writeFileSync } from "fs";

/**
 * @description 设置
 * @author xfy
 * @export
 * @interface Setting
 */
interface Setting {
  /**@description 设置key*/
  key: "rootDir" | "outDir" | "ns" | "outFile";
  /**@description 设置value*/
  value: string;
  /**@description 设置说明*/
  description: string;
}

/**@description 设置列表*/
const settings: Setting[] = require("./config-settings.json");

/**
 * @description 合并设置并保存
 * @author xfy
 * @param {(Record<string, string | undefined>)} settingsObject
 */
function merge(settingsObject: Record<string, string | undefined>): void {
  settings.forEach((setting) => {
    const settingValue = settingsObject[setting.key];
    if (settingValue === undefined) {
      return;
    }
    setting.value = settingValue;
  });
  const file = join(__dirname, "config-settings.json");
  const fileContent = JSON.stringify(settings);
  writeFileSync(file, fileContent);
}

export { settings, merge, Setting };
