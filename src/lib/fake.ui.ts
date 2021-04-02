



interface TestUI {
    a: 1;
    b: [1, 2];
}

interface TestUI2 {
    c: 1;
    d: [1, TestUI]
}


interface FK<T> {
    get<K extends keyof T>(key: K): (
        T[K] extends [any, any]
        ?
        // T[K][0]
        {
            raw: T[K][0];
            reference: FK<T[K][1]>;
        }
        : T[K]
    );
}



function test<T>(value: T): FK<T> {
    return value as any;
}


// const b = test({} as TestUI2);
// const c = b.get("c");
// const d = b.get("d");
// const e = d.reference.get("b").reference.get("")
// const f = d.reference.get("b").reference.get("toFixed");





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

