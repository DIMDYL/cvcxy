<script setup>
import { reactive, ref } from 'vue'
import { login } from '@/api/userapi.js'
const user = reactive({
  username: '',
  password: ''
})
const userlogin = () => {
  login(user)
}
const labelPosition = ref('Top')
</script>
<template>
  <div class="login">
    <h1>登录</h1>
    <el-form
      :label-position="labelPosition"
      label-width="auto"
      :model="user"
      style="max-width: 600px"
    >
      <el-form-item label="用户名">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password" />
      </el-form-item>
      <el-form-item>
        <div class="button">
          <a @click="userlogin" v-preventReClick>登录</a>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
.login {
  width: 100%;
  text-align: center;
  h1 {
    color: #ffd04b;
    margin-bottom: 10px;
  }
  .button {
    width: 100%;
    -webkit-user-select: none;
    display: flex;
    height: 30px;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>
