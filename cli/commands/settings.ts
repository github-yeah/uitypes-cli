import { type Command } from 'commander';
import { settings, merge } from '../../configs/config.settings';

/**
 * @description 加载设置命令
 * @author xfy
 * @export
 * @param {Command} program
 */
export function loadSettingsCommand(program: Command): void {
  const cmd = program.command('settings').alias('s').description(`修改本地配置，不设置参数则输出已有设置`);

  settings.forEach(({ key, description }) => {
    cmd.option(`--${key} [${key}]`, description);
  });
  cmd.action(settingsAction);
}
function settingsAction(options: Partial<Record<string, string>>): void {
  if (Reflect.ownKeys(options).length === 0) {
    console.log(settings);
    return;
  }
  merge(options);
}
