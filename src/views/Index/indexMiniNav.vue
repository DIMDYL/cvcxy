<script setup></script>

<template>
  <div class="mininav" style="display: none">
    <div class="islogin BoxColor">
      <a href="/" class="nav_item">
        <el-icon color="#409efc" class="iconfont">&#xe664; </el-icon>
        <p>CV</p>
      </a>
      <a href="/cv" class="nav_item">
        <el-icon color="#409efc" class="iconfont">&#xe64f; </el-icon>
        <p>发布</p>
      </a>
      <a href="/user" class="nav_item">
        <el-icon color="#409efc" class="iconfont">&#x100d9; </el-icon>
        <p>用户中心</p>
      </a>
    </div>
  </div>
</template>
<style lang="less" scoped>
.mininav {
  width: 100%;
  position: fixed;
  bottom: 5px;
  height: 60px;
  justify-content: center;
  .islogin {
    width: 90%;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    border-radius: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 2px solid white;
  }
  .nav_item {
    -webkit-user-select: none;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 14px;
      padding-top: 5px;
    }
  }
}
</style>
