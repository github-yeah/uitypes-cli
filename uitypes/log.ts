/**
 * @description log
 * @author xfy
 * @export
 * @param {string} msg
 */
export function log(msg: string): void {
  // const head = chalk.blueBright("[uitypes-cli]");
  const head = "[uitypes-cli]";
  console.log(`${head} ${msg}`);
}

/**
 * @description 方法耗时装饰器
 * @author xfy
 * @export
 * @param {Object} _target
 * @param {(string | symbol)} key
 * @param {TypedPropertyDescriptor<(...args: any[]) => any>} descriptor
 * @returns {(TypedPropertyDescriptor<(...args: any[]) => any> | void)}
 */
export function logMethodTimeCost(
  _target: Object,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  const method = descriptor.value;
  if (method === undefined) {
    return;
  }
  descriptor.value = function (...args: any[]) {
    const timeLabel = `[uitypes-cli] [method=${key.toString()}]，耗时`;
    console.time(timeLabel);
    const result = method.apply(this, args);
    console.timeEnd(timeLabel);
    return result;
  };
}
