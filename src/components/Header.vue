<template>
  <el-row>
    <el-col :span="3">
      <div>
        <el-button type="text" size="medium" v-on:click="toggleDrawer()">
          <icon name="bars"></icon>
        </el-button>
      </div>
    </el-col>
    <el-col :span="21">
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
  margin-top:-3px;
  margin-left:-100px;
  font-family:Roboto;
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
