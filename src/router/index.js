import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/Index/index.vue'
import User from '@/views/User/index.vue'
import Article from '@/views/Article/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index,
      meta: { title: '首页' },
      children: [
        {
          path: '/user',
          component: User,
          meta: { title: '用户中心' }
        },
        {
          path: '/',
          component: Article,
          meta: { title: '首页' }
        },
        {
          path: '/login',
          component: () => import('@/views/Login/index.vue'),
          meta: { title: '登录' }
        },
        {
          path: '/register',
          component: () => import('@/views/Register/index.vue'),
          meta: { title: '注册' }
        },
        {
          path: '/cv',
          component: () => import('@/views/MyCv/index.vue'),
          meta: { title: '发布CV' }
        }
      ]
    }
  ]
})
//register
router.afterEach((to) => {
  // 获取目标路由的meta中的title信息 进行拼接，修改 页面title
  document.title = `${to.meta.title || ''} - CV程序员 `
  const contentContainer = document.querySelector('.main')
  if (contentContainer) {
    contentContainer.scrollTop = 0
  } else {
    // 如果没有找到特定容器，则尝试滚动整个窗口
    window.scrollTo(0, 0)
  }
})
export default router
