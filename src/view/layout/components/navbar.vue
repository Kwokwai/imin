<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	   <el-menu-item index="1">处理中心</el-menu-item>
	    <el-dropdown class="avatar-container" trigger="click" style="inline-height">
	      <div class="avatar-wrapper">
	        <img data-v-1b90192e="" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
	        <i class="el-icon-caret-bottom"></i>
	      </div>
	      <el-dropdown-menu class="user-dropdown" slot="dropdown">
	        <router-link class="inlineBlock" to="/">
	          <el-dropdown-item>
	            Home
	          </el-dropdown-item>
	        </router-link>
	        <el-dropdown-item divided>
	          <span @click="logout" style="display:block;">LogOut</span>
	        </el-dropdown-item>
	      </el-dropdown-menu>
	    </el-dropdown>
  	</el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style type="text/css">
	.avatar-container {
    	height: 50px;
	    display: inline-block;
	    position: absolute;
	    right: 3px;
	}
	.avatar-wrapper .user-avatar[data-v-1b90192e]{
		width: 50px;
	    height: 50px;
	    border-radius: 10px;
	    display: inline-block;
	    margin-top: 5px
	}
</style>