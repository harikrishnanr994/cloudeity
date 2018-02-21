<template>
  <el-row>
    <el-col :span="24">
      <div class="head-wrap">
       <h1>Cloudeity</h1>
       </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.head-wrap{

}
</style>
<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader v-bind:isCollapse="isCollapse" v-on:toggleDrawer="togNavDrawer($event)"/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu v-bind:isCollapse="isCollapse" ></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'app',
  data () {
    return {
      isCollapse: true }
  },
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  },
  methods: {
    togNavDrawer (tog) {
      this.isCollapse = tog
    }
  }
}

</script>

<style>
body{
  background-color:#FAFBFD;
  margin:0px;
}
.header {
  background-color: #fff;
  color: #409EFF;
  line-height: 60px;
  position: relative;
    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0,0.2);
    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
    box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
    padding: 10px;
    z-index:10;
}
</style>
