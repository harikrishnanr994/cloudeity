<template>
<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
   <div class="grid-content">
     <el-col :span="24">
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
     <h2>Connect your Social Accounts</h2>
     <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6">
      <button type="info" class="social github" > <icon class="icon" name="github" scale="2"></icon><span> <p>Connect GitHub</p></span></button>
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6">
        <button type="primary" class="social facebook" > <icon class="icon" name="facebook" scale="2"></icon><span> <p>Connect Facebook</p></span></button>
       </el-col>
       <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6">
         <button type="primary" class="social google" > <icon class="icon" name="google" scale="2"></icon><span> <p>Connect Google</p></span></button>
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6">
          <button type="primary" class="social twitter" > <icon class="icon" name="twitter" scale="2"></icon><span> <p>Connect Twitter</p></span></button>
        </el-col>
     </el-col>
 </div>
 </el-col>
</template>

<style scoped>

.profiledetails1{
text-align:left;
font-family:Roboto;
font-size:28px;
margin-left:150px !important;
font-weight:400;
color:black;
}
.image-cropper1 {
    max-width: 150px;
    height: auto;
    position: absolute;
    overflow: hidden;
    float:left;
    margin-left:30px;

}

.image-cropper1 img{
    display: block;
    height: auto;
    width: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}
.profilelink1{
height:55px;
margin-top:-10px;
margin-bottom:-10px;
margin-left:-20px !important;
font-family:Roboto;
font-weight:200;
font-size:28px;
}
.email{
font-family:Roboto;
font-weight:100;
font-size:16px;
margin-top:25px;
color:grey;
}
.email1{
font-family:Roboto;
font-weight:100;
font-size:16px;
margin-top:10px;
color:grey;
}
.profile{
display: flex;
align-items: right;
justify-content: center;
position: absolute;
right: 50px;
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
.social{
  width:230px;
  color: #fff;
  height: 60px;
  margin: 10px;
  border-radius: 4px;

}
.github{
  background-color: #676767;
}
.facebook{
  background-color: #3b5998;
}
.google{
  background-color: #d34836;
}
.twitter{
  background-color: #00aced;
}
.icon{
  margin-left:-150px;
  width: 50px;
  margin-top: 5px;
  margin-bottom: -12px;
}
p{
  font-size: 15px;
  text-align: center;
  font-weight:100;
  margin-top: -15px !important;
  margin-left: 10px;
}
h2{
  margin: 10px;
  margin-left: 20px;
}
</style>
