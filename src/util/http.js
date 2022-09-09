// 1- 对于数据请求的封装
// import axios from "axios";

// function httpForList() {
//   return axios({
//     url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9505125",
//     headers: {
//       "X-Client-Info":
//         '{"a":"3000","ch":"1002","v":"5.2.1","e":"16616028971216008320712705","bc":"110100"}',
//       "X-Host": "mall.film-ticket.film.list",
//     },
//   });
// }

// function httpForDetail(params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=6410241`,
//     headers: {
//       "X-Client-Info":
//         '{"a":"3000","ch":"1002","v":"5.2.1","e":"16616028971216008320712705","bc":"110100"}',
//       "X-Host": "mall.film-ticket.film.info",
//     },
//   });
// }

// export default {
//   httpForList,
//   httpForDetail
// }

//2-axios 封装
import axios from 'axios'
import { Toast } from 'vant';
var http = axios.create({
  baseURL:'https://m.maizuo.com',
  timeout:10000,
  headers:{
    "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16616028971216008320712705","bc":"110100"}'
  }
})

// 在发请求之前拦截  --showLoading
http.interceptors.request.use(function (config) {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 在成功之后拦截   --hideLoading
http.interceptors.response.use(function (response) {
  Toast.clear()
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  Toast.clear()
  return Promise.reject(error);
});

export default http