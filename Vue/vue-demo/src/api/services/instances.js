// http.js
import axios from 'axios'
import router from '../../router'
import {MessageBox, Message} from 'element-ui'

let loginUrl = '/login'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://apis.juhe.cn'
}
axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'}
axios.defaults.timeout = 60000

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     token && (config.headers.Authorization = token)
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   })
axios.interceptors.request.use(
  config => {
    if (router.history.current.path !== loginUrl) {
      let token = window.sessionStorage.getItem('token')
      if (token == null) {
        router.replace({path: loginUrl, query: {redirect: router.currentRoute.fullPath}})
        return false
      } else {
        config.headers['Authorization'] = 'JWT ' + token
      }
    }
    return config
  }, error => {
    Message.warning(error)
    return Promise.reject(error)
  })


// axios.defaults.timeout = 10000

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  }, error => {
    if (error.response !== undefined) {
      switch (error.response.status) {
        case 400:
          MessageBox.alert(error.response.data)
          break
        case 401:
          if (window.sessionStorage.getItem('out') === null) {
            window.sessionStorage.setItem('out', 1)
            MessageBox.confirm('会话已失效! 请重新登录', '提示', {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              router.replace({path: loginUrl, query: {redirect: router.currentRoute.fullPath}})
            }).catch(action => {
              window.sessionStorage.clear()
              window.localStorage.clear()
            })
          }
          break
        case 402:
          MessageBox.confirm('登陆超时 ！', '提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            router.replace({path: loginUrl, query: {redirect: router.currentRoute.fullPath}})
          })
          break
        case 403:
          MessageBox.alert('没有权限！')
          break
        // ...忽略
        default:
          MessageBox.alert(`连接错误${error.response.status}`)
      }
      return Promise.resolve(error.response)
    }
    return Promise.resolve(error)
  })


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
