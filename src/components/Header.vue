<template>
  <el-row>
    <el-col :xs="3" :sm="3" :md="1" :lg="1" :xl="1">
      <div>
        <el-button type="text" v-on:click="toggleDrawer()">
          <icon name="bars" scale="1.3"></icon>
        </el-button>
      </div>
    </el-col>
    <el-col :xs="21" :sm="21" :md="23" :lg="23" :xl="23">
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
