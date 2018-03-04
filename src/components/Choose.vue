<template>
  <el-row>
    <el-col :xs="20" :sm="20" :md="12" :lg="8" :xl="6" v-for="category in categories" :key="category['Category']" >
    <el-button v-on:click="chooseTheme(category.Category)" type="primary" plain class="white" >
      <el-card :body-style="{ padding: '0px' }">
        <img src="@/assets/hamburger.png" class="image">
        <div style="padding: 14px;">
          <span>{{category.Category}}</span>
        </div>
      </el-card>
      </el-button>
    </el-col>
  </el-row>
</template>
<style scoped>

.white{
margin-bottom:50px;
background-color: rgba(255,255,255,0);
border-color: rgba(255,255,255,0);
}
.blue{
margin-bottom:50px;
background-color: #409EFF;
border-color: #409EFF;
}
</style>

<script>
import { bus } from '../main.js'
export default{
  props: ['categories'],
  methods: {
    chooseTheme (name) {
      bus.$emit('chooseTheme', name)
    }
  }
}
</script>
