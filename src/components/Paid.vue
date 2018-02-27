<template>
  <div>
    <h1>Dashboard</h1>
    <el-row>
      <el-col :span="24" >
        <div class="grid-content">
          <div class="spacer">&nbsp;</div>
          <div class="spacer">&nbsp;</div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Category" name="category">
              <el-row :gutter="24">
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Blog</h3>
                        <div class="bottom clearfix">
                          <p> This is blog category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">CRM Systems</h3>
                        <div class="bottom clearfix center">
                          <p> This is CRM category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">E-Commerce</h3>
                        <div class="bottom clearfix center">
                          <p> This is e-commerce category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Portfolio</h3>
                        <div class="bottom clearfix center">
                          <p> This is portfolio category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Job Portals</h3>
                        <div class="bottom clearfix">
                          <p> This is job portal category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Photography</h3>
                        <div class="bottom clearfix">
                          <p> This is photography category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Construction</h3>
                        <div class="bottom clearfix">
                          <p> This is construction category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Landing Websites</h3>
                        <div class="bottom clearfix">
                          <p> This is landing website category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Product Showcase</h3>
                        <div class="bottom clearfix">
                          <p> This is product category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Coming Soon Page</h3>
                        <div class="bottom clearfix">
                          <p> This is coming soon category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Company Profile</h3>
                        <div class="bottom clearfix">
                          <p> This is profile page category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">File Hosting</h3>
                        <div class="bottom clearfix">
                          <p> This is file hosting category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="Theme" name="theme">
              <el-row :gutter="24">
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Blog</h3>
                        <div class="bottom clearfix">
                          <p> This is blog category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">CRM Systems</h3>
                        <div class="bottom clearfix center">
                          <p> This is CRM category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">E-Commerce</h3>
                        <div class="bottom clearfix center">
                          <p> This is e-commerce category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Portfolio</h3>
                        <div class="bottom clearfix center">
                          <p> This is portfolio category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Job Portals</h3>
                        <div class="bottom clearfix">
                          <p> This is job portal category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Photography</h3>
                        <div class="bottom clearfix">
                          <p> This is photography category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Construction</h3>
                        <div class="bottom clearfix">
                          <p> This is construction category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Landing Websites</h3>
                        <div class="bottom clearfix">
                          <p> This is landing website category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Product Showcase</h3>
                        <div class="bottom clearfix">
                          <p> This is product showcase category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Coming Soon</h3>
                        <div class="bottom clearfix">
                          <p> This is coming soon category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">Company Profiles</h3>
                        <div class="bottom clearfix">
                          <p> This is company profile category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                  <el-button plain type="primary" value="photography">
                    <el-card :body-style="{padding:'10px' }">
                      <img src="@/assets/hamburger.png" class="image">
                        <h3 class="title">File Hosting</h3>
                        <div class="bottom clearfix">
                          <p> This is file hosting category</p>
                        </div>
                    </el-card>
                  </el-button>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="Hosting" name="hosting">
              <launchserver></launchserver>
            </el-tab-pane>
          </el-tabs>
        <div class="spacer">&nbsp;</div>
        </div>
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
import Launchserver from '@/components/Launchserver'

export default {
  data () {
    return {
      activeName: 'category'
    }
  },
  components: {
    'launchserver': Launchserver
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
