<script setup>
import { ref } from 'vue'
import { SendMialzczh, register } from '@/api/userapi.js'
const userinfo = ref({
  username: '',
  nickname: '',
  password: '',
  mailnunber: '',
  validate: ''
})
// 发送验证码
const sendMail = () => {
  SendMialzczh(userinfo.value.mailnunber)
}
const registeruser = () => {
  const data = {
    email: userinfo.value.mailnunber,
    password: userinfo.value.password,
    nickname: userinfo.value.nickname,
    username: userinfo.value.username
  }
  register(userinfo.value.validate, data)
}
</script>
<template>
  <div class="register">
    <h1>注册</h1>
    <el-form
      label-width="auto"
      :model="formLabelAlign"
      style="max-width: 600px"
    >
      <el-form-item label="用户名">
        <el-input v-model="userinfo.username" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="userinfo.nickname" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="userinfo.password" />
      </el-form-item>
      <div class="emial">
        <el-form-item label="邮箱">
          <el-input v-model="userinfo.mailnunber" />
        </el-form-item>
        <el-button @click="sendMail" v-preventReClick>发送</el-button>
      </div>
      <el-form-item label="验证码">
        <el-input v-model="userinfo.validate" />
      </el-form-item>
      <el-form-item>
        <a class="button" @click="registeruser">注册</a>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
.register {
  width: 100%;
  text-align: center;
  h1 {
    color: #ffd04b;
    margin-bottom: 10px;
  }
  button {
    margin-left: 10px;
    background-color: black;
    color: white;
  }
  .emial {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /deep/ .el-input__inner {
      flex: 1;
    }
  }
  .button {
    width: 100%;
    display: flex;
    height: 30px;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>
