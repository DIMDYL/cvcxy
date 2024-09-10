<script setup>
import { ref } from 'vue'
import { getallbyuserid,delcode } from '@/api/userapi.js'
const codelist = ref([])
const pagedata = {
  size: 10,
  page: 0,
  key: ''
}
// onMounted(async () => {
//   const { data } = await getallbyuserid({
//     pagedata
//   })
//   codelist.value = data.records
//   console.log(data)
// })
const load = async () => {
  pagedata.page++
  const { data } = await getallbyuserid(pagedata)
  if (!data.records.length == 0) {
    codelist.value.push(...data.records)
  } else {
    pagedata.page--
  }
}
const confirm = (id)=>{
  delcode(id)
}
</script>
<template>
  <el-timeline v-infinite-scroll="load">
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
            <el-popconfirm     @confirm="confirm(item.id)"
            title="确定要删除吗？">
              <template #reference>
                <a>删除</a>
              </template>
            </el-popconfirm>
            <a  :href="'/look/' + item.id">查看</a>
          </div>
          <div v-if="item.status == 0" style="margin-top: 10px">审核中</div>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
<style lang="less" scoped>
.ant-timeline {
  color: white !important;
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
</style>
