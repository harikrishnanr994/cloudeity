<template>
  <div>
    <h1>Dashboard</h1>
    <el-row>
      <el-col :span="24" >
        <div class="grid-content">
          <div class="spacer">&nbsp;</div>
          <div class="spacer">&nbsp;</div>
          <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="Category" name="category">

            </el-tab-pane>
            <el-tab-pane label="Theme" name="theme" :disabled="theme_disabled"></el-tab-pane>
            <el-tab-pane label="Hosting" name="hosting" :disabled="hosting_disabled"></el-tab-pane>

          </el-tabs>

        <div class="spacer">&nbsp;</div>
        </div>
        <keep-alive>
        <component :is="component" :categories="categories" :themeSelected="themeSelected"></component>
      </keep-alive>
      </el-col>
    </el-row>
    <div class="spacer">&nbsp;</div>
    <div class="spacer">&nbsp;</div>
  </div>
</template>
<style scoped>
  .el-row{
  margin-right:10px;
  }
  .el-col {
    border-radius: 4px;
    font-family:Roboto;
    font-weight: 300;
    }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    margin: 10px;
    background-color: #fff;
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      padding: 5px;
      overflow-y:hidden ;
  }
  .el-button{
  padding:-30px;
  margin-bottom:50px;
  background-color: rgba(255,255,255,0);
  border-color: rgba(255,255,255,0);
  }
  .el-tabs{
    margin-left:30px;
    margin-right:30px;
  }
  .title{
    margin-left: 10px;
  }
  .para{
    margin-left: 20px;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
   }
    .spacer {
      height: 20px;
     }
    p {
      font-size: 13px;
      margin-top: -5px;
      margin-bottom:5px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
<script>
import Choose from '../components/Choose.vue'
import Theme from '../components/Theme.vue'
import Hosting from '../components/Hosting.vue'
import Launchserver from '../components/Launchserver.vue'

import { bus } from '../main.js'

export default {
  data () {
    return {
      activeTab: '',
      currentDate: new Date(),
      component : 'choose',
      themeSelected: '',
      theme_disabled: true,
      hosting_disabled: true,
      categories: [
        {
          Name: 'Product Showcase'
        },
        {
          Name: 'E-Commerce'
        },
        {
          Name: 'Job Oriented'
        },
        {
          Name: 'Company Profile'
        },
        {
          Name: 'Construction'
        },
        {
          Name: 'Photography'
        }
      ]
    }
  },
  components: {
    'launchserver': Launchserver
  },
  methods: {
    handleClick (tab, event) {
      switch (this.activeTab) {
        case 'category':
          this.component = 'choose'
          this.theme_disabled = true
          this.hosting_disabled = true
          break
        case 'theme':
          this.component = 'theme'
          break;
        case 'hosting':
          this.component = 'hosting'
          break;
        default:
      }
    }
  },
  components: {
    'choose': Choose,
    'theme': Theme,
    'hosting': Hosting
  },
  created(){
    bus.$on('chooseTheme', (data) => {
      this.themeSelected = data
      this.theme_disabled = false
    })
  }
}
</script>
