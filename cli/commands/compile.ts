import { writeFileSync } from "fs";
import { join } from "path";
import { Command } from "commander";
import { Setting, settings } from "../../configs/config.settings";
import { UIProejct } from "../../uitypes/project";

/**@description 设置Record*/
const settingsRecord = settings.reduce((record, setting) => {
  record[setting.key] = setting.value;
  return record;
}, {} as Record<Setting["key"], string>);

/**
 * @description 加载编译命令
 * @author xfy
 * @export
 * @param {Command} program
 */
export function loadCompileCommand(program: Command): void {
  const cmd = program.command("compile [packages...]").alias("c").description("编译 [包目录...]", {
    packages: "包目录列表",
  });

  settings.forEach(({ key, description }) => {
    cmd.option(`--${key} <${key}>`, description);
  });

  cmd.action(compile);
}

/**
 * @description 编译
 * @author xfy
 * @param {string[]} packages
 * @param {typeof settingsRecord} options
 */
function compile(packages: string[], options: typeof settingsRecord) {
  const timeLabel = "[uitypes-cli] 导出完成！耗时";
  console.time(timeLabel);

  // const rootDir = options.rootDir ?? settingsRecord.rootDir;
  // const outDir = options.outDir ?? settingsRecord.outDir;
  // const ns = options.ns ?? settingsRecord.ns;
  // const outFile = options.outFile ?? settingsRecord.outFile;

  // const project = UIProejct.load(ns, rootDir);
  // if (project === undefined) {
  //   console.timeEnd(timeLabel);
  //   return;
  // }
  // const code = UIProejct.compile(project, packages);
  // const file = join(outDir, outFile);
  // writeFileSync(file, code);

  console.timeEnd(timeLabel);
}
