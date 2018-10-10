<template>
  <div class="app-container">
    <!--<el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>-->
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <router-link :to="'/article' + scope.row.mk">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>
      <el-table-column label="概要"  align="center"> 
        <template slot-scope="scope">
          {{scope.row.summary}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.createYear}}-{{scope.row.createDate}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data () {
    return {
      list: null,
      listLoading: true
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created () {
    // this.fetchData()
    console.log(this)
    // let id = this.$route.params.id
    this.$api.get('/article', null, response => {
      this.list = response.data.list
      console.log(response.data)
    })
  },
  methods: {
    fetchData () {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
