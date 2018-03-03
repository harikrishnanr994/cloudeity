<template>
<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
   <div class="grid-content">
     <el-col :span="20">
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
     <div class="profilelink1">
       <div class="image-cropper1">
         <img src="@/assets/hamburger.png">
       </div>
       <div class="profiledetails1"> Harikrishnan R
         <p class="email">harikrishnanr994@gmail.com</p>
         <p class="email1">Member since 1/2/2018</p>
       </div>
     </div>
      <el-button type="info" class="profile" plain>Edit Profile</el-button>
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
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
</style>
