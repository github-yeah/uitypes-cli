import { type Command } from 'commander';
import commands from './commands';

/**
 * @description 命令加载器
 * @author xfy
 * @export
 * @interface CommandLoader
 */
export interface CommandLoader {
  (program: Command): void;
}

/**
 * @description 加载所有命令
 * @author xfy
 * @export
 * @param {Command} program
 */
export function loadCommands(program: Command): void {
  const loaders = Object.values(commands) as CommandLoader[];
  loaders.forEach((loader) => loader(program));
}
