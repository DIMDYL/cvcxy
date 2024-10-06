<script setup>
import { ref, onMounted } from 'vue'
import { getallcode, getallclassification } from '@/api/userapi.js'
const pagedata = ref({
  page: 1,
  size: 10,
  key: '',
  classid: ''
})
const classificationlist = ref('')
// 获取所有分类
onMounted(async () => {
  const { data } = await getallclassification()
  classificationlist.value = data
  pagedata.value.classid = data[0].id
  getallcodelist()
})
const classclick = (id) => {
  pagedata.value.classid = id
  pagedata.value.page = 1
  getallcodelist()
}
let total = ref(0)
const codelist = ref([])
// 获取所有code
// onMounted(async () => {
//   getallcodelist()
// })
const so = async () => {
  getallcodelist()
}
const getallcodelist = async () => {
  codelist.value = []
  const { data } = (await getallcode(pagedata.value)) || []
  total.value = data.total
  codelist.value = data.records
}
const handleChange = async (page) => {
  pagedata.value.page = page
  getallcodelist()
  // 获取 .main盒子
  const contentContainer = document.querySelector('.main')
  // 如果盒子存在就盒子滚动到0
  if (contentContainer) {
    contentContainer.scrollTop = 0
  } else {
    // 如果没有找到特定容器，则尝试滚动整个窗口
    window.scrollTo(0, 0)
  }
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
      <div class="classbox">
        <div
          class="class-item"
          v-for="item in classificationlist"
          :key="item.id"
          :class="item.id === pagedata.classid ? 'classboxactitve' : ''"
          @click="classclick(item.id)"
        >
          {{ item.name }}
        </div>
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
          <a target="_black" :href="'/look/' + item.id">查看详情</a>
        </div>
      </div>
    </div>
  </div>
  <div class="page">
    <el-pagination
      background=""
      v-model:current-page="pagedata.page"
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
  box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.621);
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
    .classbox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      padding: 10px;
      background-color: #252527;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      .class-item {
        background-color: #19191b;
        color: white;
        padding: 10px 15px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition:
          background-color 0.3s,
          transform 0.3s;
      }

      .class-item:hover {
        background-color: #35373a;
        transform: translateY(-2px);
      }
    }
    .classboxactitve {
      background-color: red !important;
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
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.621);
    &:hover {
      transform: translateY(-2px);
    }
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
