<script setup>
import { onMounted, ref } from 'vue'
import { useLayoutStore } from '@/stores/layout.js'
const layoutStore = useLayoutStore()
const y = ref(layoutStore.y)
import userTimeLine from './userTimeLine.vue'
import { getuserinfo } from '@/api/userapi.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = ref('')
onMounted(async () => {
  const { data } = await getuserinfo()
  user.value = data
})
const logout = () => {
  // localStorage.removeItem('token')
  ElNotification({
    title: '成功',
    message: '退出成功'
  })
  setTimeout(() => {
    router.push('/')
    localStorage.removeItem('token')
  }, 1000)
}
</script>
<template>
  <div class="panel">
    <div class="info BoxColor">
      <div class="infobox animate__animated animate__jackInTheBox">
        <img
          style="width: 200px"
          src="http://api.cvcxy.cn/img/b5f5b2a8-dff5-4702-ac30-2437d62c1dec.png"
        />
        <h1>你好呀</h1>
        <h3>{{ user.username }}</h3>
        <div class="userbtn">
          <a href="/updateuser">
            <el-button type="info">编辑</el-button>
          </a>
          <el-popconfirm @confirm="logout" title="确认退出吗？">
            <template #reference>
              <el-button type="info">退出</el-button>
            </template>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <div class="timeline BoxColor">
      <userTimeLine></userTimeLine>
    </div>
  </div>
</template>
<style lang="less" scoped>
.panel {
  width: 100%;
  margin: 27px 0;
  display: flex;
  .info {
    width: 300px;
    padding: 10px;
    // height: 200px;
    max-height: 400px;
    box-sizing: border-box;
    margin-right: 20px;
    color: #ffd04b;
    img {
      border-radius: 10px;
    }
    .infobox {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .userbtn {
        button {
          background-color: #252527;
          margin: 10px;
        }
      }
    }
  }
  .timeline {
    flex: 1;
    padding: 27px;
    box-sizing: border-box;
    height: auto;
    transition: all 0.5s;
  }
}
.show {
  display: none !important;
}
</style>
