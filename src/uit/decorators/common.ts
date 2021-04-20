namespace uit.decorators.common {
    type FunctionDescriptor<T extends (...args: any) => any = (...args: any) => any> = TypedPropertyDescriptor<T>

    /**@description 方法耗时日志*/
    export function logMethodTimeCost(_target: Object, key: string | symbol, descriptor: FunctionDescriptor): FunctionDescriptor | void {
        const method = descriptor.value;
        if (method === undefined) {
            return;
        }


        descriptor.value = function (...args: any[]) {
            const startTime = Date.now();
            const result = method.apply(this, args);
            const endTime = Date.now();
            const costTime = (endTime - startTime) * 0.001;
            console.log(`[Function: ${key.toString()}] - 耗时：${costTime.toFixed(2)}秒`);
            return result;
        }
    }
}