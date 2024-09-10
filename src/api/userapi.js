import request from './request.js'

// 添加代码
export const addCode = (data) => {
  request.post('/user/code/add', data)
}
// 获取所有分类
export const getallclassification = () => {
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
  if (code === '') {
    code = 1
  }
  request.post(`/user/user/register/${code}`, data)
}


// 更新用户信息
export const updateuser = (data) => {
  request.put('/user/user/update/', data).then((res) => {
    if (res.code === 1) {
      setTimeout(() => {
        history.go(0)
      }, 500)
    }
  })
}

// 登录
export const login = (data) => {
  request.post('/user/user/login', data).then((res) => {
    localStorage.setItem('token', res.data.token)
  })
}

// 获取用户信息
export const getuserinfo = () => {
  return request.get('/user/user/userinfo')
}

// 根据用户id获取code
export const getallbyuserid = (data) => {
  return request.get(
    `/user/code/getallbyuserid?page=${data.page}&size=${data.size}&key=${data.key}`
  )
}

// 根据id获取code
export const findbyidcode = (id) => {
  return request.get(`/user/code/findbyid/${id}`)
}

// 根据id获取code
export const delcode = (id) => {
   request.post(`/user/code/del/${id}`)
}

// 根据id修改code
export const updatebyidcode = (data) => {
  request.post('/user/code/update', data).then((res) => {
    if (res.code == 1) {
      setTimeout(() => {
        location.href = '/user'
      }, 1000)
    }
  })
}
// 获取所有文章
export const getallcode = (data) => {
  return request.get(
    `/user/code/getall?page=${data.page}&size=${data.size}&key=${data.key}`
  )
}
