<template>
  <el-row>
    <el-col :span="6" v-for="category in categories" :key="category['Name']">
      <el-card :body-style="{ padding: '0px' }">
        <img src="@/assets/hamburger.png" class="image">
        <div style="padding: 14px;">
          <span>{{category.Name}}</span>
          <div class="bottom clearfix">
            <el-button v-on:click="chooseTheme(category.Name)">Select</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { bus } from '../main.js'
export default{
  props: ['categories'],
  methods : {
    chooseTheme (name){
      bus.$emit('chooseTheme',name);
    }
  }
}
</script>
