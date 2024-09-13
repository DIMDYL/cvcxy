// axios 基础封装
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://api.cvcxy.cn/api'
})
request.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem('token')
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)
//  服务器响应
request.interceptors.response.use(
  (res) => {
    if (res.config.method === 'get') {
      return res.data
    }
    const data = res.data
    if (data.code === 0) {
      ElNotification.error({
        title: '错误',
        message: data.msg
      })
    } else if (data.code === 1) {
      ElNotification({
        title: '成功',
        message: data.msg
      })
      setTimeout(() => {
        history.go(0)
      }, 1000)
    } else if (data.code === 2) {
      ElNotification({
        title: '错误',
        message: '登录过期'
      })
    }
    return res.data
  },
  (e) => {
    console.log(e.status)
    if (e.status === 401) {
      ElNotification.error({
        title: '错误',
        message: '请先登录'
      })
      setTimeout(() => {
        localStorage.removeItem('token')
        history.go(0)
      }, 1000)
    } else if (e.status === 500) {
      location.href = '/404'
    }
  }
)
export default request
