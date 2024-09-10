<script setup>
import { ref } from 'vue'
import { useLayoutStore } from '@/stores/layout.js'
const layoutStore = useLayoutStore()
const y = ref(layoutStore.y)
</script>
<template>
  <div class="contentright" :class="{ top: y > 200 }">
    <div class="contentbox BoxColor">
      <img src="@/assets/imgs/logo.gif" />
      <h1>Hello World！</h1>
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
    padding: 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
    }
  }
  .top {
    position: fixed;
    top: 17px;
    transition: all 0.5s;
  }
}
</style>
