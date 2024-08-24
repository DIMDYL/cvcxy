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
