import request from './request.js'

// 添加代码
export const addCode = (data) => {
  request.post('/user/code/add', data)
}
// 获取所有分类
export const getallclassification = () => {
  sessionStorage.setItem('token', 'token')
  return request.get('/user/classification/getall')
}
// 发送注册/找回密码验证码
export const SendMialzczh = (mailnunber) => {
  request.get(`/comment/user/sendmail?mailnunber=${mailnunber}`).then((res) => {
    if (res.code === 0) {
      ElNotification.error({
        title: '错误',
        message: res.msg
      })
    } else if (res.code === 1) {
      ElNotification({
        title: '成功',
        message: res.msg
      })
    } else if (res.code === 2) {
      ElNotification({
        title: '错误',
        message: '登录过期'
      })
    }
  })
}

// 用户注册
export const register = (code, data) => {
  request.post(`/user/user/register/${code}`, data)
}
