<template>
  <el-container style="
    position: relative;
    height: 100%;
  ">
    <el-aside width="200px" height="100%">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
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
  },
  methods: {
    CloseSidebar () {
      this.$store.dispatch('')
    }
  }
}
</script>

<style lang="less">
</style>
