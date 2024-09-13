<script setup>
import { ref } from 'vue'
import { useLayoutStore } from '@/stores/layout.js'
const layoutStore = useLayoutStore()
const y = ref(layoutStore.y)
</script>
<template>
  <div class="contentright" :class="{ top: y > 200 }">
    <div class="contentbox BoxColor">
      <img
        class="animate__animated animate__bounce animate__bounceInRight"
        src="http://api.cvcxy.cn/img/b5f5b2a8-dff5-4702-ac30-2437d62c1dec.png"
      />
      <h1
        style="margin-top: 17px; color: #ffd04b"
        class="animate__animated animate__bounce animate__rubberBand"
      >
        好好学习，天天向上！
      </h1>
    </div>
  </div>
</template>
<style lang="less" scoped>
.contentright {
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  .contentbox {
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.621);
    padding: 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100%;
      border-radius: 10px;
    }
  }
  .top {
    position: fixed;
    top: 17px;
    transition: all 0.5s;
  }
}
</style>
