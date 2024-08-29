<script setup>
import loginComponents from './registerComponents.vue'
</script>
<template>
  <div class="register">
    <div class="box BoxColor">
      <div class="registerbox">
        <div class="top">
          <div
            data-v-58ecf930=""
            class="top animate__animated animate__bounce animate__rubberBand"
          >
            <h2 data-v-58ecf930="">CV</h2>
            <h2 data-v-58ecf930="">程序员</h2>
          </div>
        </div>
        <loginComponents />
        <div class="bottom">
          <a href="forgotpassword">忘记密码</a>
          <a href="/login">去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  padding: 17px;
  box-sizing: border-box;
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    color: #ff69b4;
    .registerbox {
      width: 400px;
      .top {
        color: #ffd04b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
      }
      .bottom {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        a {
          cursor: pointer;
          color: #ffd04b;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
}
/deep/ .el-form-item__label {
  color: #ff69b4 !important;
}
/deep/ .el-input__wrapper {
  background-color: #252527 !important;
}
/deep/ .el-input__inner {
  color: #ff69b4 !important;
}
</style>
