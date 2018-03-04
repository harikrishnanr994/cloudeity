<template>
  <div>
  <h1>&nbsp;</h1>

   <el-row>
     <el-col :span="24" >
       <div class="grid-content">
            <profile></profile>
            <social></social>
       </div>

     </el-col>
   </el-row>
  </div>
</template>
<style scoped>
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

    .profiledetails{
    text-align:left;
    font-family:Roboto;
    font-size:15px;
    margin-left:30px;
    font-weight:400;
    color:black;
    }
    .image-cropper {
        max-width: 40px;
        height: auto;
        position: absolute;
        overflow: hidden;
        margin-top:-3px;
        float:left;
    }

    .image-cropper img{
        display: block;
        height: auto;
        width: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
    }
    .profilelink{
    height:55px;
    margin-top:-10px;
    margin-bottom:-10px;
    margin-left:-20px !important;
    font-family:Roboto;
    font-weight:200;
    font-size:15px;
    }

    a:link {
    text-decoration: none;
    color:#676767;
    }
    a:visited {
        text-decoration: none;
        color:#676767;
    }
    a:hover {
        text-decoration: none;
        color: #409EFF;
    }
    a:active {
        text-decoration: none;
        color: #409EFF !important;
    }
    .active {
        color: #409EFF !important;
    }
    ul {
      list-style-type: none;
    }
    .list{
    margin-top:-8px;
    height:40px;
    margin-left:10px;
    margin-bottom:3px;
    }
    .h2{
    color:rgba(128,128,128,1);
    margin:10px;
    margin-left:30px;
    font-size:40px;
    font-style:normal;
    font-weight:300;
    height:57px;
    line-height:57.6px;
    margin-bottom:24px;
    }
</style>
<script>
import Profile from '@/components/Profile'
import Social from '@/components/Social'

export default {
  name: 'app',
  components: {
    'profile': Profile,
    'social': Social
  }
}
</script>
