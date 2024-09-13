<script setup>
import { ref, onMounted, watch } from 'vue'
import { findbyidcode } from '@/api/userapi.js'
import { useRoute } from 'vue-router'
import Prism from 'prismjs'
import Content from '@/components/Content/index.vue'
const route = useRoute()
const id = route.params.id
const codes = ref('')
const codeinfo = ref('')
const classification = ref('')
const nickname = ref('')
const avatar = ref('')
onMounted(async () => {
  const { data } = await findbyidcode(id)
  console.log(data)
  codeinfo.value = data
  classification.value = data.classification.name
  nickname.value = data.user.nickname
  avatar.value = data.user.avatar
  codes.value = data.code
})
onMounted(() => {
  Prism.highlightAll() // 切换更新内容则重新调用这个方法
})
setTimeout(() => {
  Prism.highlightAll() // 切换更新内容则重新调用这个方法
}, 1000)
watch(codes, () => {
  Prism.highlightAll()
})
const returnbtn = () => {
  history.go(-1)
}
</script>
<template>
  <Content>
    <div class="topinfo BoxColor">
      <div class="animate__animated animate__jackInTheBox">
        <el-avatar
          style="
            width: 100px;
            height: 100px;
            box-shadow: 2px 2px 10px black;
            border: 2px solid white;
          "
          :src="avatar"
        />
      </div>
      <h3 style="margin-top: 10px">{{ codeinfo.title }}</h3>
      <div class="top-bar">
        <p>发布：{{ codeinfo.createTime }}</p>
        <button class="return" @click="returnbtn">返回</button>
      </div>
      <p>分类：{{ classification }} _ 发布人：{{ nickname }}</p>
    </div>

    <pre><code class="language-js line-numbers">{{ codes }}</code></pre>
  </Content>
</template>
<style lang="less" scoped>
.topinfo {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  color: #ffd04b;
  .top-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    p {
      color: #ffd04b;
    }
    .return {
      width: 100px;
      padding: 8px 0;
      background-color: #00000067;
      color: #ffd04b;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #ffcf4b;
        color: #252527;
      }
    }
  }
  p {
    padding: 10px 0;
  }
}
.code-toolbar {
  width: calc(100vw - 650px);
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background-color: #252527 !important;
}
</style>
