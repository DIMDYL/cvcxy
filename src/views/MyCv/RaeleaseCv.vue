<script setup>
import { ref, onMounted } from 'vue'
import CodeMirror from 'vue-codemirror6'
import { oneDark } from '@codemirror/theme-one-dark'
import { java } from '@codemirror/lang-java'
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
const lang = java()
// 扩展
const extensions = [oneDark]
const title = ref('')

onMounted(() => {})

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>
<template>
  <div class="raeleasecv">
    <h1>好好学习 天天向上</h1>
    <code-mirror
      v-model="codeVal"
      basic
      :lang="lang"
      style="height: 400px"
      :extensions="extensions"
    />
    <div class="operate">
      <el-select
        v-model="value"
        filterable
        placeholder="请选择语言"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input v-model="title" style="width: 240px" placeholder="代码标题" />
    </div>
    <div class="bottom">
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>
<style lang="less">
.raeleasecv {
  width: calc(100vw - 650px);
  background-color: black;
  border-radius: 20px;
  padding: 40px 20px;
  margin-bottom: 20px;
  border: 2px solid rgb(255, 228, 179);
  h1 {
    margin-bottom: 10px;
    text-shadow: 8px 5px 10px rgb(197, 81, 81);
  }
  .cm-editor {
    height: 100%;
    outline: none !important;
    background-color: #252527;
  }
  .cm-gutters {
    background-color: #252527 !important;
  }
  .operate,
  .bottom {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .bottom {
    justify-content: end !important;
  }
  .el-select__wrapper,
  .el-scrollbar,
  .el-input__wrapper {
    background-color: #252527 !important;
  }
  input {
    color: white !important;
  }
  .el-select__popper.el-popper {
    border: none !important;
    box-shadow: 2px 2px 20px 2px #2c2c2d;
  }
  .el-select,
  .el-input {
    margin: 10px;
  }
}
</style>
