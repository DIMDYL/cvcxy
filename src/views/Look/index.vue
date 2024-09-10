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
onMounted(async () => {
  const { data } = await findbyidcode(id)
  console.log(data)
  codeinfo.value = data
  classification.value = data.classification.name
  nickname.value = data.user.nickname
  codes.value = data.code
})
onMounted(() => {
    Prism.highlightAll() // 切换更新内容则重新调用这个方法
})
setTimeout(()=>{
    Prism.highlightAll() // 切换更新内容则重新调用这个方法
},1000)
watch(codes, () => {
  Prism.highlightAll()
})
const returnbtn = ()=>{
  history.go(-1)
}
</script>
<template>
  <Content>
    <div class="topinfo BoxColor">
      <h2>{{ codeinfo.title }}</h2>
      <p>分类：{{ classification }} _ 发布人：{{ nickname }}</p>
      <div style="width: 100%;;display: flex; justify-content: space-between;">
        <p>{{ codeinfo.createTime }}</p>
        <button class="return" @click="returnbtn">返回</button>
      </div>
    </div>
    <pre><code class="language-js line-numbers">{{ codes }}</code></pre>
  </Content>
</template>
<style lang="less" scoped>
.topinfo{
  width: 100%;
  padding: 10px;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  color: #ffd04b;
  .return{
    width: 100px;
    background-color: #252527;
    color: #ffd04b;
  }
  p{
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
