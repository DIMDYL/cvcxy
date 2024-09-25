<script setup>
import { ref } from 'vue'
const defaultactive = ref(location.pathname)
</script>

<template>
  <div class="nav BoxColor">
    <div class="top animate__animated animate__bounce animate__rubberBand">
      <h3>CV</h3>
      <h1>程序员</h1>
    </div>
    <el-menu
      :default-active="defaultactive"
      router
      active-text-color="#ffd04b"
      background-color="#252527"
      class="el-menu-vertical-demo animate__animated animate__bounce animate__rubberBand"
      text-color="#fff"
    >
      <el-menu-item index="/">
        <el-icon color="#409efc" class="iconfont"> &#xe639; </el-icon>
        <span>CV广场</span>
      </el-menu-item>
      <el-menu-item index="/cv">
        <el-icon color="#409efc" class="iconfont"> &#xe66c; </el-icon>
        <span>发布CV</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon color="#409efc" class="iconfont">&#xe61d; </el-icon>
        <span>用户中心</span>
      </el-menu-item>
      <!-- <a href="https://github.com/DIMDYL/cvcxy" target="_blank">
        <el-menu-item>
          <el-icon color="#409efc" class="iconfont">&#xe6c2; </el-icon>
          GitHub地址
        </el-menu-item>
      </a> -->
    </el-menu>
  </div>
</template>
<style lang="less" scoped>
.nav {
  width: 200px;
  height: 100%;
  overflow: hidden;
  -webkit-user-select: none;
  .top {
    width: 100%;
    height: 177px;
    color: #ffd04b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.el-menu {
  -webkit-user-select: none;
  border-right: none !important;
}
</style>
