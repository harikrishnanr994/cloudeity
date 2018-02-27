<template>
  <div>
  <div class="spacer">&nbsp;</div>
  <div class="spacer">&nbsp;</div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
            <el-row :gutter="10">
              <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
                <div class="spacer">&nbsp;</div>
                <div class="spacer">&nbsp;</div>
                <el-form ref="form" :model="serverForm" label-width="120px" size="mini">
                  <el-form-item label="Email id">
                    <el-input v-model="serverForm.email" type="email" placeholder="Enter your Email Id"></el-input>
                  </el-form-item>
                  <el-form-item label="Username for Wordpress">
                    <el-input v-model="serverForm.username" type="text" placeholder="please enter the username for wordpress"></el-input>
                  </el-form-item>
                  <el-form-item label="Password for Wordpress">
                   <el-input v-model="serverForm.password" type="password"  placeholder="please enter the password for wordpress"></el-input>
                  </el-form-item>
                  <el-form-item label="Host IP address">
                    <el-input v-model="serverForm.ipaddress" type="text" placeholder="please enter the host IP address"></el-input>
                  </el-form-item>
                  <el-form-item label="Domain Name">
                    <el-input v-model="serverForm.domain" type="text" placeholder="please enter your domain name"></el-input>
                  </el-form-item>
                  <el-form-item label="SSH KEY">
                    <el-input v-model="serverForm.ssh" type="textarea"></el-input><br>
                    <p>Copy the above ssh key and create a new ssh key access to your server for installation process.</p>
                  </el-form-item>
                  <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
        </div>
        <div class="spacer">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
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
     .el-textarea__inner{
     height: 120px;
    line-height: 20px;
     }
</style>
<style>
.el-textarea__inner{
height: 120px;
line-height: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      serverForm: {
        email: '',
        username: '',
        password: '',
        ipaddress: '',
        domain: '',
        ssh: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfHTu0E+7ewrcMFTuBUWwfY///4pJ63U29w43x2NyMcIInE9lYrgPV/cZRh05jM1tq4asmDnJvy9E+xACTrMgvDtr50sSF0F1srXzDhQaGXp9iuHKntX+z/kAGRJ3z1u/iLKA1pyqGndAHNYy1dotDKXVx9y+Zq8ZnR25Vc27hQjKFofKfNzeH/5nceISjitZ2ThCeuJFZIma6uHTppC0qegKeL24uCGOOvP1Kv3oxCWum1SEI9SUcjsZTITe4XgrHAUJ7bLSfUJQkviPPF6o7GQN4RkJpfYu3CXFIDifj5fSS64jFby17WPRJSPVYlC+IOrOqnThZBPElfojADLMz gd@Clouddeity'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.serverForm)
    }
  }
}
</script>
