import { Command } from "commander";
import { settings } from "../../configs/config.settings";

/**
 * @description 加载编译命令
 * @author xfy
 * @export
 * @param {Command} program
 */
export function loadCompileCommand(program: Command): void {
  const cmd = program
    .command("compile [packages...]")
    .alias("c")
    .description("编译 [包目录...]", {
      packages: "包目录列表",
    });

  settings.forEach(({ key, description }) => {
    cmd.option(`--${key} <${key}>`, description);
  });

  cmd.action(compile);
}

/**
 * @description
 * @author xfy
 * @param {string[]} packages
 * @param {Readonly<Record<string, string>>} options
 */
function compile(
  packages: string[],
  options: Readonly<Record<string, string>>
) {
  // const compileOptions: Record<string, string> = { packages };
  // const input = compilerOptions.input ?? "";
  // compilerOptions.input ??= uit.path.isAbsolute(input)
  //   ? input
  //   : uit.path.join(process.cwd(), input);
  // uit.project.compile(compilerOptions);
}
