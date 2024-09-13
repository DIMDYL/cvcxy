<template>
  <div class="notfound">
    <div class="notfoundbox">
      <img src="@/assets/imgs/005I4VvOly1hhwpyc87dpj30sg0sg4at.jpg" />
      <p>页面被其他程序员复制走了</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.notfound {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  .notfoundbox {
    // width: 80%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    p {
      margin-top: 17px;
      color: #ffd04b;
      font-size: 20px;
    }
    img {
      border-radius: 10px;
    }
  }
}
</style>
