export type Method =
    'get' | 'GET'
    | 'delete' | 'Delete'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH';

// tips: type 可以声明基本类型别名，联合类型，元组等类型. interface 不可以

export interface AxiosRequestConfig {
    url: string,
    method?: Method,
    data?: any,
    param?: any,
}

// tips: 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个 ? 符号。