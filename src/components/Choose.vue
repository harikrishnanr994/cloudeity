<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="16" :lg="8" :xl="6" v-for="category in categories" :key="category['category_name']" >
    <el-button v-on:click="chooseTheme(category.category_name)" type="primary" plain class="white" >
      <el-card :body-style="{ padding: '0px' }">
        <!--<img :src="category.image_url | appendAssetDirectory" class="image">-->
        <img :src="category.image_url | appendAssetDirectory" class="image">
        <div style="padding: 14px;">
          <span>{{category.category_name}}</span>
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
  },
  filters: {
    appendAssetDirectory (value) {
      if (!value) return ''
      value = value.toString()
      return require('@/assets/category_images/' + value)
    }
  }
}
</script>
