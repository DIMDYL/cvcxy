<script setup>
import { ref, onMounted } from 'vue'
import CodeMirror from 'vue-codemirror6'
import { oneDark } from '@codemirror/theme-one-dark'
import { json } from '@codemirror/lang-json'
const initJson = {
  name: `maybaby`,
  year: 25,
  weight: 45,
  height: 165
}
// 初始化
let codeVal = ref('')
// 转成json字符串并格式化
codeVal.value = JSON.stringify(initJson, null, '\t')

// json语言
const lang = json()
// 扩展
const extensions = [oneDark]

onMounted(() => {})
</script>
<template>
  <div class="raeleasecv">
    <code-mirror
      v-model="codeVal"
      basic
      :lang="lang"
      style="height: 400px"
      :extensions="extensions"
    />
  </div>
</template>
<style lang="less">
.raeleasecv {
  width: calc(100vw - 640px);
  background-color: black;
  border-radius: 20px;
  padding: 20px;
  .cm-editor {
    height: 100%;
    outline: none !important;
    background-color: black;
  }
  .cm-gutters {
    background-color: black !important;
  }
}
</style>
