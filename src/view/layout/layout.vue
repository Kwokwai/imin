<template>
  <el-container>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
        <navbar></navbar>
      </div>
      </el-col>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <sidebar></sidebar>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <app-main></app-main>
        </div></el-col>
      </el-row>
    </el-row>
  </el-container>
</template>

<script>
import {Navbar, Sidebar, AppMain} from './components'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style lang="less">
</style>
