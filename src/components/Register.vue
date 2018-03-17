<template>
<div class="center">
<el-col :xs="24" :sm="20" :md="16" :lg="14" :xl="14">
  <div class="spacer">&nbsp;</div>
  <div class="spacer">&nbsp;</div>
   <div class="grid-content">
     <div class="grid-content-logo center"><div class="image-cropper1"><img src="@/assets/hamburger.png"></div><br>
   </div>
   <h2 class="center">Devalogam</h2>

     <el-row>
       <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20" >
         <div class="spacer">&nbsp;</div>
         <el-form ref="form" :model="register" label-width="120px" size="mini">
           <el-form-item label="Name">
             <el-input v-model="register.name" type="text" placeholder="Enter your Name" required></el-input>
           </el-form-item>
           <el-form-item label="Email id">
             <el-input v-model="register.email" type="email" placeholder="Enter your Email Id" required></el-input>
           </el-form-item>
           <el-form-item label="Password">
            <el-input v-model="register.password" type="password"  placeholder="please enter the password" required></el-input>
           </el-form-item>
           <el-form-item label="Confirm Password">
            <el-input v-model="register.cpassword" type="password"  placeholder="please confirm the password" required></el-input>
           </el-form-item>
           <el-form-item label="Phone Number">
             <div>
              <el-input placeholder="Please enter your Phone Number" v-model="register.phno" class="input-with-select">
                <el-select v-model="register.country" slot="prepend" placeholder="Country">
                  <el-option label="IN" value="+91"></el-option>
                  <el-option label="US" value="+1"></el-option>
                  <el-option label="MY" value="+60"></el-option>
                </el-select>
              </el-input>
            </div>
          </el-form-item>
           <el-form-item size="large" class="center">
             <el-button type="primary" @click="onSubmit">Register</el-button>
             <el-button>Cancel</el-button>
           </el-form-item>
         </el-form>
         <div class="center ">
           <router-link to="/Login" exact class="center register"><h3 style="text-align:center">Registered already?</h3></router-link>
        </div>
       </el-col>

       <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
         <div>
           <hr>
           <h2 style="text-align:center" class="center">Signup using your Social Accounts</h2>
           <div class="spacer">&nbsp;</div>
           <div class="center">
             <el-col :xs="24" :sm="12" :md="8" :lg="3" :xl="3">
               <button type="info" class="social github center" ><icon class="icon" name="github" scale="2"></icon></button>
             </el-col>
             <el-col :xs="24" :sm="12" :md="8" :lg="3" :xl="3">
               <button type="primary" class="social facebook center" > <icon class="icon" name="facebook" scale="2"></icon></button>
             </el-col>
             <el-col :xs="24" :sm="12" :md="8" :lg="3" :xl="3">
              <button type="primary" class="social google center" > <icon class="icon" name="google" scale="2"></icon></button>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="3" :xl="3">
                <button type="primary" class="social twitter center" > <icon class="icon" name="twitter" scale="2"></icon></button>
              </el-col>
            </div>
            <div class="spacer">&nbsp;</div>
            <div class="spacer">&nbsp;</div>
          </div>
       </el-col>
     </el-row>


 </div>
 </el-col>
 </div>
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
    margin-left: 38px;


}
@media only screen and (max-width: 600px) {
  .image-cropper1 {
    max-width: 150px;
    height: auto;
    position: absolute;
    overflow: hidden;
    float:left;
    margin-left: 18px;
}
.image-cropper1 img{
    height: auto;
	  display: block;
    width: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    margin: auto;
    margin-left: 20px;
}


  .grid-content-logo {
    border-radius: 50%;
    width: 80px;
    background-color: #fff !important;
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    padding: 5px;
    max-width: 100px;
    height:80px;
    margin-left: 100px !important;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    z-index: 990;
    background-position: center;
  }
.el-form{
  margin-left: -50px;
}
.social{
  width:50px;
  color: #fff;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;

}

}
@media only screen and (min-width: 600px) and (max-width: 768px) {
  .image-cropper1 {
    max-width: 150px;
    height: auto;
    position: absolute;
    overflow: hidden;
    float:left;
    margin-left: 18px;
}
.image-cropper1 img{
    height: auto;
	  display: block;
    width: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    margin: auto;
    margin-left: 20px;
}


  .grid-content-logo {
    border-radius: 50%;
    width: 80px;
    background-color: #fff !important;
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    padding: 5px;
    max-width: 100px;
    height:80px;
    margin-left: 250px !important;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    z-index: 990;
    background-position: center;
  }
.el-form{
  margin-left: -50px;
}
.social{
  width:50px;
  color: #fff;
  height: 50px;
  border-radius: 50%;
  margin-left: 45px;

}



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
    background-position: center;
}

.grid-content-logo {
  border-radius: 50%;
  width: 80px;
  background-color: #fff !important;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
  padding: 5px;
  max-width: 100px;
  height:80px;
  margin-left: 290px;
  margin-top: 50px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  z-index: 990;
  background-position: center;
}

.el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-form{
    margin-left: 50px;
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
    z-index: 20;
}

.social{
  width:50px;
  color: #fff;
  height: 50px;
  border-radius: 50%;

}
.register{
  margin: auto;
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
  margin:auto;
  width: 50px;
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
.center {
  display: flex;
  align-items: center;
  justify-content: center;
 }
 a:link, a:visited {
     color: #000;
     text-align: center;
     text-decoration: none;
     font-family: Roboto;
     font-weight: 200;
 }
 a:hover, a:active {
   color: #409EFF;
 }

</style>

<script>
export default {
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        country: '',
        phno: ''

      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.register)
    }
  }
}
</script>
