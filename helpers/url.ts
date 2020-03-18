import {isDate, isPlainObject} from '../util';

// 对于字符 @、:、$、,、、[、]，我们是允许出现在 url 中的，不希望被encode。
function encode (val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}


export function bulidURL (url: string, params?: any): string {
    if (!params) {
        return url;
    }

    const parts: string[] = [];
    Object.keys(params).forEach((key) => {
        const val = params[key];
        let values: string[];

        if (val === null || val === undefined) {
            return;
        }

        if (Array.isArray(val)) {
            values = val;
            key += '[]';
        } else {
            // 这种情况只有一个值，为了和数组情况统一
            values = [val];
        }

        values.forEach((val) => {
            if (isDate(val)) {
                val = val.toISOString();
            } else if (isPlainObject(val)) {
                val = JSON.stringify(val);
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        });

        let serializedParams = parts.join('&');

        if (serializedParams) {
            const markIndex = url.indexOf('#');
            if (markIndex !== -1) {
                url = url.slice(0, markIndex);
            }

            url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        } 
    });

    return url;
}