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
    <div class="titlebg"><h2 class="title1">Search By Status</h2></div>
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
  margin: 10px;
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
   padding: 10px;
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
        case 'Replied' : tagcolor = 'info'
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
