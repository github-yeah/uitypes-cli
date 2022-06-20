import { Command } from "commander";
import { settings, merge } from "../../configs/config.settings";

/**
 * @description 加载设置命令
 * @author xfy
 * @export
 * @param {Command} program
 */
export function loadSettingsCommand(program: Command): void {
  const cmd = program.command("settings").alias("s").description(`修改本地配置 [path='configs/config-settings.json']`);

  settings.forEach(({ key, description }) => {
    cmd.option(`--${key} [${key}]`, description);
  });
  cmd.action(merge);
}
