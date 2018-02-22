<template>
  <el-table
    :data="tableData"
    style="width: 100%; margin:10px;">

    <el-table-column
      label="Domain Name"
      width="200px">
      <template slot-scope="scope">
        <icon name="at"></icon>
        <span style="margin-left: 10px">{{ scope.row.domain }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Host"
      width="200px">
      <template slot-scope="scope">
        <icon name="server"></icon>
        <span style="margin-left: 10px">{{ scope.row.host }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="IP Address"
      width="200px">
      <template slot-scope="scope">
        <icon name="address-card"></icon>
        <span style="margin-left: 10px">{{ scope.row.ip }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Active From"
      width="150px">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.active }}</span>
      </template>
    </el-table-column>

    <el-table-column
      prop="tag"
      label="Tag"
      width="100px"
      :filters="[{ text: 'Free', value: 'Free' }, { text: 'Premium', value: 'Premium' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === 'Free' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      label="Operations"
      width="220px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i><span style="margin-left: 10px">Edit</span></el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i><span style="margin-left: 10px">Delete</span></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        domain: 'www.alphabet.xyz',
        host: 'Digitalocean',
        ip: '159.10.70.56',
        active: '2018-01-02',
        tag: 'Premuim'
      }, {
        domain: 'www.facebook.com',
        host: 'Vultr',
        ip: '139.10.56.70',
        active: '2018-05-01',
        tag: 'Premuim'
      }, {
        domain: 'www.phacsin.com',
        host: 'Digitalocean',
        ip: '139.07.45.25',
        active: '2017-05-12',
        tag: 'Free'
      }, {
        domain: 'www.serverbly.tk',
        host: 'Digitalocean',
        ip: '139.10.23.554',
        active: '2018-01-01',
        tag: 'Premuim'
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
    }
  }
}
</script>
<style>
.cell{
  font-family: Roboto;
  font-weight: 200;
}
</style>
