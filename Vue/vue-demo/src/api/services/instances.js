// http.js
import axios from 'axios'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://apis.juhe.cn'
}

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     token && (config.headers.Authorization = token)
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   })

// axios.defaults.timeout = 10000

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 响应拦截器
// axios.interceptors.response.use(response => {
//   if (response.status === 200) {
//     return Promise.resolve(response)
//   } else {
//     return Promise.reject(response)
//   }
// }, error => {
//   if (error.response.status) {
//     // 对不同返回码对相应处理
//     return Promise.reject(error.response)
//   }
// })

// get 请求
export function httpGet({
                          url,
                          params = {}
                        }) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post请求
export function httpPost({
                           url,
                           data = {},
                           params = {}
                         }) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      // 发送的数据
      data,
      // url参数
      params

    }).then(res => {
      resolve(res.data)
    })
  })
}
