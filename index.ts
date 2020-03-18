import {AxiosRequestConfig} from './types';
import {bulidURL} from './helpers/url';
import xhr from './src/xhr';


// url处理
function transformUrl(config: AxiosRequestConfig) {
    const {url, params} = config;
    bulidURL(url, params);
}

// config处理
function processConfig(config: AxiosRequestConfig) {
    transformUrl(config);
}

// 入口
function axios(config: AxiosRequestConfig) {
    processConfig(config);
    xhr(config);
}

export default axios;