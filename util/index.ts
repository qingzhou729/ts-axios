// todo 为什么要用 val is Date 这样的格式
export function isDate(val: any): val is Date {
    return Object.prototype.toString.call(val) === "[object Date]";
}

export function isPlainObject(val: any): val is object {
    return val !== null && Object.prototype.toString.call(val) === "[object Object]";
}