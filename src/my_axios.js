const axios = require('axios');

const api = axios.create({
    baseURL: '',
    timeout: 3000,
})

api.interceptors.request.use(config => {
    return config;
}, err => {
    Promise.reject(err);
});
api.interceptors.response.use(res => {
    return Promise.resolve(res);
}, err => {
    Promise.reject(err);
});

module.exports = api;