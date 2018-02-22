<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader v-bind:isCollapse="isCollapse"/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu v-bind:isCollapse="isCollapse" ></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer class="footer"><h5>Cloudeity</h5></el-footer>
    </el-container>
  </div>
</template>
<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data () {
    return {
      isCollapse: true }
  },
  components: {
    'navmenu': NavMenu,
    'vheader': Header,
    'vfooter': Footer
  }
}

</script>

<style>
html, body{
    height:100%;
    width: 100%;
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
footer {
  background-color: #409EFF !important;
  position: absolute;
  z-index:10;
  bottom:0px;
  width:100%;
  color: #fff;
  text-align: center;
  vertical-align: middle;
}
</style>
