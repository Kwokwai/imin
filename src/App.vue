<template>
  <div id="app">
    <!--<router-view/>-->
    <router-view/>
  </div>
</template>

<script>import Login from './view/login/login'
export default {
  components: {Login},
  component: [{
    name: 'login',
    component: Login
  }]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
  width: 100%;
}
</style>
