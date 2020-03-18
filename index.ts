import {AxiosRequestConfig} from './types';
import {bulidURL} from './helpers/url';
import xhr from './src/xhr';


// url处理
function transformUrl(config: AxiosRequestConfig) {
    const {url, params} = config;
    return bulidURL(url, params);
}

// config处理
function processConfig(config: AxiosRequestConfig) {
    config.url = transformUrl(config);
}

// 入口
function axios(config: AxiosRequestConfig) {
    processConfig(config);
    console.log(config)
    xhr(config);
}

export default axios;