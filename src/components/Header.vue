<template>
  <el-row>
    <el-col :xs="6" :sm="6" :md="3" :lg="2" :xl="2">
      <div>
        <el-button type="text" v-on:click="toggleDrawer()">
          <icon name="bars" scale="2"></icon>
        </el-button>
      </div>
    </el-col>
    <el-col :xs="18" :sm="18" :md="21" :lg="22" :xl="22">
      <h1>Cloudeity</h1>
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
  margin: auto;
  margin-left:20px;
  margin-top:-10px;
  color: #409EFF;
}
</style>

<script>
import {bus} from '../main'
export default {
  props: {
    isCollapse: Boolean
  },
  methods: {
    toggleDrawer () {
      this.isCollapse = !this.isCollapse
      bus.$emit('toggleDrawer', this.isCollapse)
    }
  }
}
</script>
