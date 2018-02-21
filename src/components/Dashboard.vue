<template>
  <div>
    <h1 class="dash">{{msg}}</h1>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
        </div>
      </el-col>
      DASHBOARD
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Dashboard'
    }
  }
}
</script>
