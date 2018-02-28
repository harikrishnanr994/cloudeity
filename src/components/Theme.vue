<template>
  <el-row>
    <el-col :xs="20" :sm="20" :md="12" :lg="8" :xl="6" v-for="theme in Theme" :key="theme['Name']" >
    <el-button v-on:click="chooseTheme(theme.Name)" type="primary" plain >
      <el-card :body-style="{ padding: '0px' }">
        <img src="@/assets/hamburger.png" class="image">
        <div style="padding: 14px;">
          <span>{{category.Name}}</span>
        </div>
      </el-card>
      </el-button>
    </el-col>
  </el-row>
</template>
<style scoped>

.el-button{
margin-bottom:50px;
background-color: rgba(255,255,255,0);
border-color: rgba(255,255,255,0);
}
</style>

<script>
import { bus } from '../main.js'
export default{
  props: ['themeSelected'],
  methods: {
    chooseTheme (name) {
      bus.$emit('chooseTheme', name)
    }
  }
}
</script>
