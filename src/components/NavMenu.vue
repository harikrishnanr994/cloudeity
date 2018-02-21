<template>
  <el-row class="tac">
  <el-col :span="24">
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <router-link to="/dashboard" exact>
    <el-menu-item index="1">
    <i class="el-icon-menu"></i>
    <span slot="title">Dashboard</span>
  </el-menu-item>
  </router-link>
  <router-link to="/messages" exact>
  <el-menu-item index="2">
    <i class="el-icon-message"></i>
    <span slot="title">Messages</span>
  </el-menu-item>
  </router-link>
  <router-link to="/services" exact>
  <el-menu-item index="3">
    <i class="el-icon-service"></i>
    <span slot="title">Services</span>
  </el-menu-item>
  </router-link>
  <router-link to="/settings" exact>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">Settings</span>
  </el-menu-item>
</router-link>
  <button v-on:click="isCollapse = !isCollapse">Toggle</button>

</el-menu>

  </el-col>

</el-row>

</template>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 700px;
  position: relative;
  -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0,0.2);
  -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
  padding: 10px;
}
.el-menu-vertical-demo{
  min-height: 700px;
  position: relative;
  -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0,0.2);
  -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
  padding: 10px;
}
.is-active{
  background-color: #ecf5fe;
}
a{
  color: #FFFFFF;
  text-decoration: none;
}
a.router-link-active {
  font-weight: 800;
  color: #ecf5fe;
}
</style>

<script>
import {bus} from '../main'

export default {
  props: {
    isCollapse: Boolean
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    bus.$on('toggleDrawer', data => {
      this.isCollapse = data
    })
  }
}
</script>
