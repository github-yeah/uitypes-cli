// 包装纸
class Wrapper<T> {

    // wrapped
    static of<T>(value: T): Wrapper<T> {
        return new Wrapper(value);
    }

    constructor(private _value: T) {
    }

    // map
    map<U>(fn: (args: T) => U): Wrapper<U> {
        return Wrapper.of(fn(this._value));
    }

    // ap
    ap<U>(arg: Wrapper<(param: T) => U>): Wrapper<U> {
        return Wrapper.of(arg._value(this._value));
    }

    // get  value
    get value(): T {
        return this._value;
    }
}

