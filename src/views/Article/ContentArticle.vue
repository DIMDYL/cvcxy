<script setup>
import { ref, onMounted } from 'vue'
import { getallcode } from '@/api/userapi.js'
const pagedata = ref({
  page: 1,
  size: 10,
  key: ''
})
let total = ref(0)
const codelist = ref([])
onMounted(async () => {
  const { data } = await getallcode(pagedata.value)
  total.value = data.total
  codelist.value = data.records
})
const so = async () => {
  codelist.value = []
  const { data } = await getallcode(pagedata.value)
  console.log(codelist)
  total.value = data.total
  codelist.value = data.records
}
const handleChange = async (page) => {
  pagedata.value.page = page
  const { data } = await getallcode(pagedata.value)
  console.log(codelist)
  total.value = data.total
  codelist.value = data.records
}
</script>
<template>
  <div class="articlelist">
    <div class="searchbox BoxColor">
      <div class="search">
        <el-input
          v-model="pagedata.key"
          style="width: 240px"
          placeholder="搜一下？"
        />
        <button @click="so">搜索</button>
      </div>
    </div>
    <div v-for="item in codelist" :key="item.id" class="articlebox BoxColor">
      <p style="font-size: 15 px">{{ item.classification.name }}</p>
      <div class="title">{{ item.title }}</div>
      <div class="word"></div>
      <div class="info">
        <div class="userinfo">
          <el-avatar :size="50" :src="item.user.avatar" />
          <div>
            <p>{{ item.user.nickname }}</p>
            <p>发布于：{{ item.createTime }}</p>
          </div>
        </div>
        <div class="articleinfo">
          <a :href="'/look/' + item.id">查看详情</a>
        </div>
      </div>
    </div>
  </div>
  <div class="page">
    <el-pagination
      background=""
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="total"
    />
  </div>
</template>
<style lang="less" scoped>
/deep/.el-pager {
  flex-wrap: wrap;
}
.page {
  background-color: #252527;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
}
/deep/.number,
/deep/.btn-next,
/deep/ .btn-prev,
/deep/ .more {
  background-color: #252527 !important;
  color: white !important;
  border: 1px solid white;
}
/deep/.is-active {
  background-color: #000000 !important;
}
.articlelist {
  width: 100%;
  .title {
    color: rgb(200, 182, 182);
  }
  .searchbox {
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    .search {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      overflow: hidden;
    }
    button {
      width: 100px;
      background-color: #19191b;
      color: white;
      -webkit-user-select: none;
    }
  }
  .articlebox {
    width: 100%;
    padding: 20px;
    margin-bottom: 17px;
    box-sizing: border-box;
    border-radius: 10px;
    .word {
      width: 100%;
      // height: 200px;
      padding: 20px 0;
      text-indent: 2em;
      p {
        line-height: 27px;
      }
    }
    .info {
      width: 100%;
      height: 50px;
      display: flex;
      color: #ffd04b;
      justify-content: space-between;
      align-items: center;
      .userinfo {
        display: flex;
        align-items: center;
        -webkit-user-select: none;
        p {
          padding: 0 10px;
        }
      }
      .articleinfo {
        height: 100%;
        display: flex;
        -webkit-user-select: none;
        p {
          padding: 0 10px;
        }
        a {
          cursor: pointer;
          padding: 0px 30px;
          //   border: 1px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
/deep/.el-input__wrapper {
  background-color: #19191b !important;
}
/deep/.el-input {
  width: auto !important;
  flex: 1;
  height: 40px;
}
/deep/.el-input__wrapper {
  box-shadow: none !important;
}
/deep/ .el-input__inner {
  color: white !important;
}
</style>
