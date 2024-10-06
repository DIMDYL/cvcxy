<script setup>
import { ref, onMounted } from 'vue'
import { getallbyuserid, delcode, getallclassification } from '@/api/userapi.js'
const codelist = ref([])
const pagedata = ref({
  page: 1,
  size: 10,
  key: '',
  classid: ''
})
const total = ref('')
const classificationlist = ref('')
// 获取所有分类
onMounted(async () => {
  const { data } = await getallclassification()
  classificationlist.value = data
  pagedata.value.classid = data[0].id
  getallcodelist()
})
const so = async () => {
  getallcodelist()
}
const getallcodelist = async () => {
  codelist.value = []
  const { data } = (await getallbyuserid(pagedata.value)) || []
  total.value = data.total
  codelist.value = data.records
}
const confirm = (id) => {
  delcode(id)
}
const classclick = (id) => {
  pagedata.value.classid = id
  pagedata.value.page = 1
  getallcodelist()
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
  <el-timeline>
    <el-timeline-item
      v-for="item in codelist"
      :key="item.id"
      :timestamp="item.createTime"
      placement="top"
    >
      <el-card>
        <div class="card">
          {{ item.title }}
          <div
            class="operation animate__animated animate__bounce animate__flipInY"
            v-if="item.status == 1"
          >
            <a :href="'/editcode/' + item.id">编辑</a>
            <el-popconfirm @confirm="confirm(item.id)" title="确定要删除吗？">
              <template #reference>
                <a>删除</a>
              </template>
            </el-popconfirm>
            <a :href="'/look/' + item.id">查看</a>
          </div>
          <div v-if="item.status == 0" style="margin-top: 10px">审核中</div>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
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
.ant-timeline {
  color: white !important;
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
.card {
  -webkit-user-select: none;
  cursor: pointer;
  .operation {
    width: 200px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    color: #ffd04b;
    a {
      cursor: pointer;
      display: block;
      padding: 10px;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
/deep/ .el-card__body {
  background-color: #252527;
  color: rgb(190, 184, 184);
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
/deep/.el-pager {
  flex-wrap: wrap;
}
.page {
  background-color: #252527;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  // box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.621);
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
</style>
