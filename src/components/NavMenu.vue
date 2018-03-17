<template>
  <el-row class="tac noscroll">
  <el-col :span="24">
  <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapsed"  :router="router_var">
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
<router-link to="/launchserver" exact>
  <el-menu-item index="5">
  <i class="el-icon-plus"></i>
  <span slot="title">Launch website</span>
</el-menu-item>
</router-link>
<router-link to="/paid" exact>
  <el-menu-item index="6">
  <i class="el-icon-plus"></i>
  <span slot="title">Paid Website</span>
</el-menu-item>
</router-link>
<router-link to="/messagedetails" exact>
  <el-menu-item index="7">
  <i class="el-icon-plus"></i>
  <span slot="title">Message Details</span>
</el-menu-item>
</router-link>
<router-link to="/login" exact>
  <el-menu-item index="8">
  <i class="el-icon-plus"></i>
  <span slot="title">Login</span>
</el-menu-item>
</router-link>
</el-menu>

  </el-col>

</el-row>

</template>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  overflow: hidden;
  margin-bottom:0;
  position: fixed;
  -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0,0.2);
  -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
}
.noscroll { overflow: hidden; }

.el-menu-vertical-demo{
  height: 100%;
  min-height:100%;
  position: fixed;
  margin-top:60px;
  -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0,0.2);
  -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
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
  data () {
    return {
      collapsed: '',
      defaultActive: '1',
      router_var: true
    }
  },
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
    let path = this.$route.path.substr(1).toLowerCase()
    console.log(path)
    switch (path) {
      case '/':
        this.defaultActive = '1'
        this.$router.push('dashboard')
        break
      case 'dashboard':
        this.defaultActive = '1'
        break
      case 'messages':
        this.defaultActive = '2'
        break
      case 'services':
        this.defaultActive = '3'
        break
      case 'settings':
        this.defaultActive = '4'
        break
      case 'launchserver':
        this.defaultActive = '5'
        break
      case 'paid':
        this.defaultActive = '6'
        break
      case 'messagedetails':
        this.defaultActive = '7'
        break
      case 'login':
        this.defaultActive = '8'
        break
    }
    this.$router.push(path)
    bus.$on('toggleDrawer', data => {
      console.log(data)
      this.collapsed = data
    })
    bus.$on('changeIndex', data => {
      this.defaultActive = data
    })
  },
  updated () {
    console.log('Updated')
    let path = this.$route.path.substr(1).toLowerCase()
    console.log(path)
    switch (path) {
      case 'dashboard':
        this.defaultActive = '1'
        break
      case 'messages':
        this.defaultActive = '2'
        break
      case 'services':
        this.defaultActive = '3'
        break
      case 'settings':
        this.defaultActive = '4'
        break
      case 'launchserver':
        this.defaultActive = '5'
        break
      case 'paid':
        this.defaultActive = '6'
        break
      case 'messagedetails':
        this.defaultActive = '7'
        break
      case 'login':
        this.defaultActive = '8'
        break
    }
  }
}
</script>
