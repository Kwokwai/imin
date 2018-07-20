<template>
  <el-container style="
    position: relative;
    height: 100%;
  " >
  
    <el-aside width="201px" height="100%">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header style="border-bottom: 1px solid #e6e6e6;">
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
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .sidebar-btn {
    height: 42px;
    position: absolute;
  }
</style>
