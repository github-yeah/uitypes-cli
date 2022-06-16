/**
 * @description Option Item
 * @author xfy
 * @interface _Option
 */
interface _Option {
  /**@description 值*/
  value: string;
  /**@description 说明*/
  desc: string;
}

/**
 * @description Options
 * @author xfy
 * @export
 * @interface Options
 */
export interface Options {
  /**@description UI项目根目录*/
  root: _Option;
  /**@description UI项目类型命名空间*/
  ns: _Option;
  /**@description UI项目类型输出目录（不设置则生成在`input`目录）*/
  dest?: _Option;
  /**@description UI项目类型输出文件（所有的类型合并到一个文件内，每个文件单独输出）*/
  destFile?: _Option;
}