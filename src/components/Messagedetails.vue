<template>
<el-row>
  <div class="spacer">&nbsp;</div>
  <div class="spacer">&nbsp;</div>
  <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
   <div class="grid-content">
     <h2>Ticket Details</h2>
     <div class="spacer">&nbsp;</div>
     <div class="spacer">&nbsp;</div>
       <div class="grid-content">
         <h3 class="tokendetails">Token#: 4846 | Date: 04-02-2018</h3><hr>
         <h3 class="tokenheading">What is Lorem Ipsum?</h3>
         <h5 class="tokensubmit">Submitted By: client</h5>
         <p class="tokendescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <p>
         <div class="spacer">&nbsp;</div>
         <div class="spacer">&nbsp;</div>
     </div>
 </div>
 </el-col>
 <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
  <div class="grid-content1">
    <div class="spacer">&nbsp;</div>
    <div class="titlebg"><h3 class="title1">Ticket Information</h3></div>
    <ul>
      <li class="list"><a href="#" class="details">#Token Number : <span class="right"><el-tag type="success" size="medium">1234</el-tag></span></a></li>
      <li class="list"><a href="#" class="details"> Submitted by :<span class="right"> <h4 >Client </h4> </span> </a></li>
      <li  class="list"><a href="#" class="details"> Department : <span class="right"> <h4 >Department N1 </h4>  </span></a></li>
      <li  class="list"><a href="#" class="details">Ticket Status :<span class="right"> <el-tag type="success" size="medium">Closed</el-tag></span> </a></li>
      <li  class="list"><a href="#" class="details">Assigned Ticket :<span class="right"> <h4>Harikrishnan </h4> </span> </a></li>
    </ul>
  </div>
  <br>
  <div class="grid-content1">
    <div class="spacer">&nbsp;</div>
    <div class="titlebg"><h3 class="title1">Files</h3></div>
    <ul>
      <li class="list"><a href="#" class="replied"> File 1<span class="right"> <el-button size="mini" type="primary"  plain ><i class="el-icon-view"></i></el-button></span></a></li>
      <li class="list"><a href="#" class="replied"> File 2 <span class="right"> <el-button size="mini" type="primary"  plain ><i class="el-icon-view"></i></el-button></span> </a></li>
      <li  class="list"><a href="#" class="replied"> File 3 <span class="right"><el-button size="mini" type="primary"  plain ><i class="el-icon-view"></i></el-button></span></a></li>
    </ul>
  </div>
</el-col>
</el-row>
</template>

<style scoped>
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
.grid-content1 {
  border-radius: 4px;
  min-height: 36px;
  margin-top: 10px;
  background-color: #fff;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
    overflow-y:hidden ;
    font-family: Roboto;
}
 .cell{
   font-family: Roboto;
   font-weight: 200;
 }
 .titlebg{
   background-color: #409EFF;
   width:100%;
   color: #fff;
   height: 60px;
   margin-top: -40px;
 }
 .title1{
   color: #fff;
   font-family: Roboto;
   font-weight: 400;
   margin: 10px;
   margin-top: 20px;
   text-align: left;
   padding: 10px;
 }
 .list{
 margin-top:8px;
 height:40px;
 margin-bottom:3px;
 }

 .right {
    float: right;
    text-align: center;
    position: relative;
    margin-right: 10px;
}
ul{
  list-style: none;
  list-style-position: inside;
}
ul{
  margin-left: -40px;
}
li{
  border-bottom: 1px solid rgba(128,128,128,0.2);
}
a{
text-decoration:none;
}
h4{
  margin-top: 3px;
  font-family: Roboto;
  font-weight: 100;
}
.open{
  color: #f56c6c;
  margin-left: 30px;
}
.closed{
  color:#67c23a;
  margin-left: 30px;
}
.replied{
  color: #409EFF;
  margin-left: 30px;
}
.pending{
  color: #e6a23c;
  margin-left: 30px;
}
.all{
  color: #909399;
  margin-left: 30px;
}
.details{
  margin-left: 20px;
  font-family: Roboto;
  font-weight: 100;
  color: #000;
}
.token{
  background-color: #67c23a;
  color: #fff;
  font-size: 15px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
}
.tokendetails{
  color: #f56c6c;
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
}
.tokenheading{
  color: #000;
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
}
.tokensubmit{
  color: #f56c6c;
  font-family: Roboto;
  font-weight: 200;
  font-size: 15px;
  margin-top: -10px;
}
.tokendescription{
  color: #000;
  font-family: Roboto;
  font-weight: 200;
  font-size: 15px;
  margin-top: -10px;
}
</style>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    colorTag (row) {
      let tagcolor = ''
      switch (row.tag) {
        case 'Pending' : tagcolor = 'warning'
          break
        case 'Closed' : tagcolor = 'success'
          break
        case 'Replied' : tagcolor = 'primary'
          break
        case 'Open' : tagcolor = 'danger'
          break
        default:
      }
      return tagcolor
    }
  }
}
</script>
