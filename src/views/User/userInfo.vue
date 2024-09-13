<script setup>
import { onMounted, ref } from 'vue'
import { getuserinfo } from '@/api/userapi.js'
const user = ref('')
onMounted(async () => {
  const { data } = await getuserinfo()
  user.value = data
})
</script>
<template>
  <div class="userinfo BoxColor">
    <div class="background">
      <div class="avatar animate__animated animate__jackInTheBox">
        <el-avatar :src="user.avatar" />
      </div>
      <div class="info animate__animated animate__jackInTheBox">
        <h1>{{ user.nickname }}</h1>
        <h5>{{ user.email }}</h5>
      </div>
    </div>
    <div class="information">
      <ul>
        <!-- <li class="info animate__animated animate__jackInTheBox">
          <h1>好好学习，天天向上！</h1>
        </li> -->
        <li class="info animate__animated animate__jackInTheBox">
          <p>加入时间</p>
          <h4>{{ user.createTime }}</h4>
        </li>
        <!-- <li class="info animate__animated animate__jackInTheBox">
          <p>我的发布</p>
          <h4>30 篇</h4>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  .background {
    width: 100%;
    height: 277px;
    background-image: url('@/assets/imgs/userinfo.jpg');
    background-size: 100%;
    padding: 0 17px;
    box-sizing: border-box;
    display: flex;
    align-items: end;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: -77px;
      overflow: hidden;
      /deep/ .el-avatar {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      padding: 17px;
      color: #ffd04b;
    }
  }
  .information {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 20px;
    box-sizing: border-box;
    ul {
      display: flex;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 7px;
        box-sizing: border-box;
        p {
          font-size: 13px;
          padding: 7px 0;
          box-sizing: border-box;
        }
      }
    }
  }
  ul {
    color: #ffd04b;
  }
}
</style>
