class FakeCast<T> {

    /**
     * @description 类型转换
     * @template T
     * @param {(key: string) => any} provider
     * @returns {FakeCast<T>}
     */
    static cast<T>(provider: (key: string) => any): FakeCast<T> {
        return new FakeCast(provider);
    }

    /**
     * @description 显示列表缓存
     * @type {T}
     */
    private _displayList?: T;

    /**
     *Use `UIFakeCast.cast()` - Creates an instance of UIFakeCast.
     * @param {(key: string) => any} [provider]
     */
    private constructor(private provider?: (key: string) => any) { }


    /**
     * @description 根据名字返回带类型的对象
     * @template K
     * @param {K} name
     * @returns {(T[K] | undefined)}
     */
    get<K extends keyof T>(name: K): T[K] | undefined {
        if (!this._displayList) {
            this._displayList = {} as Record<keyof T, any>;
        }

        const existing = this._displayList[name];
        if (existing) {
            return existing;
        }

        if (!this.provider) {
            return undefined;
        }

        const display = this.provider(name as string);
        this._displayList[name] = display;
        return display;
    }


    /** @description 销毁  */
    dispose(): void {
        this.provider = undefined;
        this._displayList = undefined;
    }
}
