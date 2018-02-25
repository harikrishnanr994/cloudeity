<template>
  <div>
    <h1>Dashboard</h1>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
            <el-row :gutter="10">
              <el-col :xs="24" :sm="18" :md="20" :lg="20" :xl="22">
                <h3 class="title">Launch a new website</h3>
                <p class="para">To launch a new website using wordpress</p>
              </el-col>
              <el-col :xs="24" :sm="6" :md="4" :lg="4" :xl="2" class="center">
              <router-link to="/paid" exact>
                <el-button type="primary" class="button" plain>Launch</el-button>
              </router-link>
              </el-col>
            </el-row>
        </div>
        <div class="spacer">&nbsp;</div>
        <div class="grid-content">
            <el-row :gutter="10">
              <el-col :xs="24" :sm="18" :md="20" :lg="20" :xl="22">
                <h3 class="title">Launch a new free website</h3>
                <p class="para">To launch a new free website using wordpress</p>
              </el-col>
              <el-col :xs="24" :sm="6" :md="4" :lg="4" :xl="2" class="center">
              <router-link to="/Launchserver" exact>
                <el-button type="primary" class="button" plain>Launch</el-button>
              </router-link>
              </el-col>
            </el-row>
        </div>
        <div class="spacer">&nbsp;</div><div class="grid-content">
            <el-row :gutter="10">
              <el-col :span="24">
                <h3 class="title">Launched  Websites</h3>
              </el-col>
              <el-col :span="24" class="center">
                <serverdetail></serverdetail>
              </el-col>
            </el-row>
        </div>
        <div class="spacer">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .el-col {
    border-radius: 4px;
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
   .button {
     margin: 10px;
     margin-top: 25px;
    }
    .spacer {
      height: 20px;
     }
</style>

<script>
import ServerDetails from '@/components/ServerDetails'

export default {
  name: 'app',
  components: {
    'serverdetail': ServerDetails
  }
}
</script>
