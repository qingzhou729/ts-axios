import axios from '../../index';
console.log('test');
axios({
  method: 'get',
  url: '/simple/get',
  data: {
    a: 1,
    b: 2
  },
//   success() {

//   },
})