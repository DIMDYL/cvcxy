<script setup>
import { onMounted, ref } from 'vue'
import userTimeLine from './userTimeLine.vue'
import { getuserinfo } from '@/api/userapi.js'
const user = ref('')
onMounted(async () => {
  const { data } = await getuserinfo()
  user.value = data
})
</script>
<template>
  <div class="panel">
    <div class="info BoxColor">
      <div class="infobox animate__animated animate__jackInTheBox">
        <h1>你好呀</h1>
        <h3>{{ user.username }}</h3>
        <el-button type="info">编辑</el-button>
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
    height: 200px;
    max-height: 400px;
    box-sizing: border-box;
    margin-right: 20px;
    color: #ffd04b;
    .infobox {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    button {
      background-color: #252527;
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
