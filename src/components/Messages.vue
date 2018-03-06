<template>
<el-row>
  <div class="spacer">&nbsp;</div>
  <div class="spacer">&nbsp;</div>
  <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
   <div class="grid-content">
     <h2>Messages</h2>
     <div class="spacer">&nbsp;</div>
     <el-table
       :data="tableData"
       style="width: 100%; margin:10px;">

       <el-table-column
         label="Token #"
         width="70px">
         <template slot-scope="scope">
           <span style="margin-left: 10px">{{ scope.row.token }}</span>
         </template>
       </el-table-column>

       <el-table-column
         label="Title"
         width="150px">
         <template slot-scope="scope">
           <span style="margin-left: 10px">{{ scope.row.title }}</span>
         </template>
       </el-table-column>

       <el-table-column
         label="Department"
         width="150px">
         <template slot-scope="scope">
           <span style="margin-left: 10px">{{ scope.row.department }}</span>
         </template>
       </el-table-column>

       <el-table-column
         prop="Status"
         label="Tag"
         width="100px"
         :filters="[{ text: 'Pending', value: 'Pending' }, { text: 'Closed', value: 'Closed' }, { text: 'Open', value: 'Open' }, { text: 'Replied', value: 'Replied' }]"
         :filter-method="filterTag"
         filter-placement="bottom-end">
         <template slot-scope="scope">
           <el-tag
             :type="colorTag(scope.row)"
             close-transition>{{scope.row.tag}}</el-tag>
         </template>
       </el-table-column>

       <el-table-column
         label="Date"
         width="120px">
         <template slot-scope="scope">
           <span style="margin-left: 10px">{{ scope.row.date }}</span>
         </template>
       </el-table-column>

       <el-table-column
         label="Operations"
         width="200px">
         <template slot-scope="scope">
           <el-button
             size="mini"
             @click="handleView(scope.$index, scope.row)" plain><i class="el-icon-view"></i></el-button>
           <el-button
             size="mini"
             @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
           <el-button
             size="mini"
             type="danger"
             @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
         </template>
       </el-table-column>
     </el-table>
     <div class="spacer">&nbsp;</div>
 </div>
 </el-col>
 <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
  <div class="grid-content1">
    <div class="spacer">&nbsp;</div>
    <div class="titlebg"><h2 class="title1">Show By Status</h2></div>
    <ul>
      <li class="list"><a href="#" class="open">Open Tickets <span class="right"> <el-badge class="mark " :value="3" /> </span></a></li>
      <li class="list"><a href="#" class="closed"> Closed Tickets <span class="right"> <el-badge class="mark" :value="12"/> </span> </a></li>
      <li  class="list"><a href="#" class="replied"> Replied Tickets <span class="right"> <el-badge class="mark" :value="1"/>  </span></a></li>
      <li  class="list"><a href="#" class="pending">Pending Tickets <span class="right"> <el-badge class="mark" :value="5"/> </span> </a></li>
      <li  class="list"><a href="#" class="all">View All<span class="right"> <el-badge class="mark" :value="21"/> </span> </a></li>
    </ul>
  </div>
  <br>
  <div class="grid-content1">
    <div class="spacer">&nbsp;</div>
    <div class="titlebg"><h2 class="title1">Show By Department</h2></div>
    <ul>
      <li class="list"><a href="#" class="open">Department N1 <span class="right"> <el-badge class="mark " :value="3" /> </span></a></li>
      <li class="list"><a href="#" class="closed"> Department N2 <span class="right"> <el-badge class="mark" :value="12"/> </span> </a></li>
      <li  class="list"><a href="#" class="replied"> Department N3 <span class="right"> <el-badge class="mark" :value="1"/>  </span></a></li>
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
   text-align: center;
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
</style>
<script>
export default {
  data () {
    return {
      tableData: [{
        token: '1234',
        title: 'Digitalocean',
        department: 'Department N1',
        date: '2018-01-02',
        tag: 'Pending'
      }, {
        token: '2345',
        title: 'Vultr',
        department: 'Department N2',
        date: '2018-02-01',
        tag: 'Open'
      }, {
        token: '3412',
        title: 'Digitalocean',
        department: 'Department N2',
        date: '2018-02-05',
        tag: 'Closed'
      }, {
        token: '3124',
        title: 'Digitalocean',
        department: 'Department N1',
        date: '2018-05-12',
        tag: 'Replied'
      }]
    }
  },
  methods: {
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
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
