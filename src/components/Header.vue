<template>
  <el-row>
    <el-col :xs="3" :sm="3" :md="1" :lg="1" :xl="1">
      <div>
        <el-button type="text" v-on:click="toggleDrawer()">
          <icon name="bars" scale="1.3"></icon>
        </el-button>
      </div>
    </el-col>
    <el-col :xs="15" :sm="15" :md="20" :lg="20" :xl="20">
      <h1>Cloudeity</h1>
    </el-col>
    <el-col :xs="5" :sm="5" :md="3" :lg="3" :xl="3">
      <el-dropdown class="profile">
        <el-button type="primary" plain>
          <div class="image-cropper1"><img src="@/assets/hamburger.png"></div> <span class="profiledown"> <i class="el-icon-arrow-down el-icon--right"></i></span>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item  class="profilelink"><div class="image-cropper"><img src="@/assets/hamburger.png"></div><div class="profiledetails"> Harikrishnan R <p class="email">harikrishnanr994@gmail.com </p></div> </el-dropdown-item>
          <hr>
          <router-link to="/Settings" exact><el-dropdown-item><p class="list">Settings </p></el-dropdown-item></router-link>
          <router-link to="/Messages" exact><el-dropdown-item><p class="list">Messages <el-badge class="mark" :value="12" /> </p></el-dropdown-item></router-link>
          <router-link to="/Settings" exact><el-dropdown-item><p class="list">Billing</p></el-dropdown-item></router-link>
          <router-link to="/Logout" exact><el-dropdown-item><p class="list">Logout</p></el-dropdown-item></router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
  margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.profile{
display: flex;
align-items: right;
justify-content: center;
position: absolute;
right: 0px;
z-index:20;
}
.profiledetails{
text-align:left;
margin-left:40px;
font-family:Roboto;
font-size:15px;
font-weight:400;
color:black;
}
.profiledown{
margin-left:30px;
margin-right:-10px;
}
.list{
margin-top:-8px;
height:40px;
text-align: left;
margin-bottom:3px;
}
.image-cropper {
    max-width: 70px;
    height: auto;
    position: absolute;
    left:10px;
    margin-top:8px;
    overflow: hidden;
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
.image-cropper1 {
    max-width: 60px;
    height: auto;
    width:60px;
    position:absolute;
    margin-left:-30px;
    margin-top:-8px;
}

.image-cropper1 img{
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
font-family:Roboto;
font-weight:200;
font-size:15px;
}
.email{
font-family:Roboto;
font-weight:100;
font-size:12px;
margin-top:-15px;
color:grey;
}
.el-dropdown-menu{
width:250px;
text-align: left;
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

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
h1{
  margin-top:-10px;
  font-family:Roboto;
  color: #409EFF;
}
.fa-icon{
  margin-left:10px;
  margin-top:-30px;
  margin-bottom:5px;
  color: #409EFF;
}
</style>

<script>
import {bus} from '../main'
export default {
  data () {
    return {
      collapsed: ''
    }
  },
  props: {
    isCollapse: Boolean
  },
  methods: {
    toggleDrawer () {
      this.collapsed = !this.collapsed
      bus.$emit('toggleDrawer', this.collapsed)
    }
  },
  created () {
    this.collapsed = this.isCollapse
  }
}
</script>
