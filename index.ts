import {AxiosRequestConfig} from './types';
import xhr from './src/xhr';

function axios(config: AxiosRequestConfig) {
    xhr(config);
}

export default axios;