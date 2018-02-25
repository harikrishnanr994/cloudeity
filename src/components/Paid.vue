<template>
  <div>
    <h1>Dashboard</h1>
    <el-row>
      <el-col :span="24" >
        <div class="grid-content center">
          <div class="spacer">&nbsp;</div>
          <div class="spacer">&nbsp;</div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Category" name="category">
              <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="@/assets/hamburger.png" class="image">
                    <div style="padding: 14px;">
                      <span>Yummy hamburger</span>
                      <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button>select</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="Theme" name="theme" disabled>Choose Theme</el-tab-pane>
            <el-tab-pane label="Hosting" name="hosting" disabled>Choose Hosting</el-tab-pane>

          </el-tabs>
        <div class="spacer">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .el-col {
    border-radius: 4px;
    font-family:Roboto;
    font-weight: 300;
    }
    .el-steps{
    margin-left:30px;
    margin-right:30px;
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
    width:100%;
   }
   .button {
     margin: 10px;
     margin-top: 25px;
    }
    .spacer {
      height: 20px;
     }
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .el-button {
      padding: 10;
      float: right;
      margin:10px;
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
export default {
  data () {
    return {
      activeName: 'category',
      currentDate: new Date()
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
