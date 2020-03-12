import Axios from 'axios';
// import { promises } from 'dns';
// import { resolve } from 'q';
// import { url } from 'inspector';
// 请求拦截器
Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject.error;
});

// 响应拦截器
Axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject.error;
});

// 封装axios请求

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // url == '/user'
    // params = { firstName: 'Fred',lastName: 'Flintstone'}
    Axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  JH_news (url, params) {
    return fetch(url, params);
  }
};
