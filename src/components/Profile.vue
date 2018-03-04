<template>
<el-row>
<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
   <div class="grid-content">
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
     <el-row>
     <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
       <el-row>
         <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
           <div class="image-cropper1">
             <img src="@/assets/hamburger.png">
           </div>
         </el-col>
         <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div>
           <div class="profiledetails1"> Harikrishnan R</div>
           <div class="email">harikrishnanr994@gmail.com</div>
           <div class="email1">Member since 1/2/2018</div>
         </div>
        </el-col>
     </el-row>
     </el-col>
     <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
      <el-button type="info" class="editprofile" plain>Edit Profile</el-button>
    </el-col>
  </el-row>
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
 </div>
 </el-col>
</el-row>
</template>

<style scoped>

.image-cropper1 {
    max-width: 150px;
    width: 150px;
    height: auto;
    overflow: hidden;
    margin-left:100px;
    margin-bottom: 20px;
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

.profiledetails1{
text-align:left;
font-family:Roboto;
font-size:28px;
font-weight:400;
color:black;
margin-left: 40px;
}
.email{
font-family:Roboto;
font-weight:100;
font-size:16px;
margin-top:25px;
margin-left: 40px;
color:grey;
}
.email1{
font-family:Roboto;
font-weight:100;
font-size:16px;
margin-top:10px;
margin-left: 40px;
color:grey;
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
.center {
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .editprofile{
   margin-left: 80px;
   margin-top: 20px;
 }
</style>
