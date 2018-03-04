<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader v-bind:isCollapse="isCollapse"/>
      </el-header>
      <el-container>
        <el-aside v-if="mobileViewInPortrait">
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
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data () {
    return {
      isCollapse: true,
      mobileViewInPortrait: true
    }
  },
  components: {
    'navmenu': NavMenu,
    'vheader': Header,
    'vfooter': Footer
  },
  created () {
    console.log(window.innerWidth)
    if (window.innerWidth < 500) {
      this.mobileViewInPortrait = false
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', function (e) {
        console.log('Resize ' + window.innerWidth)
        if (window.innerWidth < 500) {
          this.mobileViewInPortrait = false
        } else {
          this.mobileViewInPortrait = true
        }
        console.log('MOBILEVIEW ' + this.mobileViewInPortrait)
      })
    })
  }
}

</script>

<style>
html, body{
    height:100%;
    width: 100%;
    background-color:#FBFBFD;
    margin:0px;
}
.header {
  background-color: #fff;
  color: #409EFF;
  line-height: 60px;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0,0.2);
    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
    box-shadow: 1px 2px 1px rgba(0, 0, 0, .2);
    padding: 10px;
    z-index:30;
}
.el-main{
width:100% !important;
height:100%;
}
footer {
  background-color: #409EFF !important;
  z-index:30;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width:100%;
  color: #fff;
  text-align: center;
  vertical-align: middle;
}
.spacer {
  height: 20px;
 }
 .center {
   display: flex;
   align-items: center;
   justify-content: center;
  }
aside{
  z-index:20;
  max-width:100px;
}

h1,h2,h3,h4,p,span{
  font-family:Roboto;
  font-weight: 200;
}
</style>
