// import './assets/main.css'
import '@/style/init.css'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import '@/assets/ali/iconfont.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(pinia)
// 自定义指令
const preventReClick = {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 2000)
      }
    })
  },
  // 如果指令的元素所在的模板被重新渲染导致元素被卸载时……
  unmounted(el) {
    // 清除事件监听器
    el.removeEventListener('click', el._clickEventListener)
    // 注意：如果你需要在 mounted 中动态添加事件监听器并保存到一个变量中
    // 你需要在 mounted 钩子中创建它，并在这里移除它
  }
}

app.directive('preventReClick', preventReClick)
app.mount('#app')
