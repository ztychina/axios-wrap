const api = require('./my_axios.js');

const login = () => api({
    url: 'https://www.baidu.com',
    method: 'get',
})

login().then(res=>{
    console.log(Object.keys(res));
})