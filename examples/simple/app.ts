import axios from '../../index';
axios({
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2,
    },
});

axios({
    method: 'get',
    url: '/simple/get',
    params: {
        test: [1, 2]
    },
});

axios({
    method: 'get',
    url: '/simple/get',
    params: {
        date: new Date(),
        a: 1,
        b: null,
        foo: '@:$,'
    },
});