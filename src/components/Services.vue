<template>

<el-row>
  <div class="spacer">&nbsp;</div>
  <div class="spacer">&nbsp;</div>
<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
   <div class="grid-content">
     <h2>Frequently Asked Questions</h2>
       <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="Consistency" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
          <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
          <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
        </el-collapse-item>
      </el-collapse>
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>

 </div>

 <div class="grid-content">
   <h2>Feedbacks</h2>
   <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Your name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Type of feedback">
      <el-select v-model="form.type" placeholder="please select the type of feedback">
        <el-option label="bug" value="bug"></el-option>
        <el-option label="feature" value="feature"></el-option>
        <el-option label="suggestion" value="suggestion"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Description">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="upload screenshot">
      <el-upload
        class="upload-demo"
        :action="'http://' + myhostname + ':8080/restapi/imageUpload'"
        name="screenshot"
        :limit="1"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
        :on-success="onSuccessUpload"
        list-type="picture">
        <el-button size="small" type="primary">Click to upload</el-button>
        <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
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
    padding: 30px;
    overflow-y:hidden ;
    font-family: Roboto;
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
<script>
import axios from 'axios'
export default {
  data () {
    return {
      activeNames: ['1'],
      form: {
        name: '',
        type: '',
        desc: ''
      },
      csrf_token: '',
      filename: '',
      myhostname: location.hostname,
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    allFieldsEntered () {
      if (this.form.name === '') {
        this.$message.error('Please enter your name')
      }
      else if (this.form.type === '') {
        this.$message.error('Please enter the type of feedback')
      }
      else if (this.form.desc === '') {
        this.$message.error('Please enter the description of the feedback')
      }
      else {
        return true
      }
      return false
    },
    onSubmit () {
      if (this.allFieldsEntered()) {
        const url = 'http://' +  this.myhostname + ':8080/restapi/uploadFeedback'
        var params = new URLSearchParams()
        params.append('name', this.form.name)
        params.append('feedback_type', this.form.type)
        params.append('description', this.form.desc)
        params.append('filename', this.filename)
        axios.post(url, params).then(response => {
          console.log(response.data.Success)
          if(response.data.Success==="True") {
            this.$message('Thank you for your feedback')
            this.$router.push('dashboard')
          }
        })
      }
    },
    handleRemove (file, fileList) {
      if(this.filename!=''){
        const url = 'http://' + this.myhostname + ':8080/restapi/deleteFile'
        var params = new URLSearchParams()
        params.append('filename', this.filename)
        axios.post(url, params).then(response => {
          console.log(response.data.Success)
          if(response.data.Success==="True") {
            this.$message('File Removed')
          }
        })
      }
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`The limit is 1, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`Delete ${file.name}？`)
    },
    onSuccessUpload (response, file, fileList) {
      if (response != 'Error Uploading File') {
        this.filename = response
      }
    },
    get_csrf_token () {
      const url = 'http://' +  this.myhostname + ':8080/restapi/get-token'
      axios.get(url).then(response => {
        this.csrf_token = response.data.token
      })
    }
  },
  mounted () {
    this.get_csrf_token()
  }
}
</script>
