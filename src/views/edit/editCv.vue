<script setup>
import {
  updatebyidcode,
  getallclassification,
  findbyidcode
} from '@/api/userapi.js'
import { ref, onMounted } from 'vue'
import CodeMirror from 'vue-codemirror6'
import { oneDark } from '@codemirror/theme-one-dark'
import { java } from '@codemirror/lang-java'
import { useRoute } from 'vue-router'
const route = useRoute()
// const initJson = null
// 初始化
let codeVal = ref('')
// 转成json字符串并格式化
// codeVal.value = JSON.stringify(initJson, null, '\t')

// json语言
const lang = java()
// 扩展
const extensions = [oneDark]
const title = ref('')
const Classificationid = ref('')
const options = ref([])
const codeid = route.params.id
// 渲染分类
onMounted(async () => {
  const { data } = (await getallclassification()) || []
  console.log(data)
  data.forEach((item) => {
    const step = {
      value: item.id,
      label: item.name
    }
    options.value.push(step)
  })
})

// 修改code
const update = () => {
  const data = {
    title: title.value,
    classId: Number(Classificationid.value),
    code: codeVal.value,
    id: codeid
  }
  updatebyidcode(data)
}
onMounted(async () => {
  const { data } = (await findbyidcode(codeid)) || []
  console.log(data)
  title.value = data.title
  codeVal.value = data.code
  Classificationid.value = data.classification.id
})
const returnbtn = () => {
  history.go(-1)
}
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
        v-model="Classificationid"
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
      <el-button @click="returnbtn" v-preventReClick>返回</el-button>
      <el-button type="primary" @click="update" v-preventReClick
        >提交</el-button
      >
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
  input,
  .el-select__placeholder {
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
