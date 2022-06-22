import { basename, dirname, join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

/**
 * @description emitter
 * @author xfy
 * @export
 * @param {string} file
 * @param {string} content
 */
export function emitter(file: string, content: string): void {
  mkdirForce(file);
  writeFileSync(file, content);
}

/**
 * @description 根据文件路径创建不存在的文件夹
 * @author xfy
 * @param {string} file
 */
function mkdirForce(file: string) {
  let dir = dirname(file);
  const dirs: string[] = [];
  while (!existsSync(dir)) {
    dirs.push(basename(dir));
    dir = dirname(dir);
    if (!dir) {
      break;
    }
  }

  dirs.reduceRight((prev, curr) => {
    prev = join(prev, curr);
    mkdirSync(prev);
    return prev;
  }, dir);
}
