<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="16" :lg="6" :xl="6" v-for="category in categories" :key="category['category_name']" class="grid-content1">
      <el-card :body-style="{ padding: '0px' }">
        <!--<img :src="category.image_url | appendAssetDirectory" class="image">-->
        <img :src="category.image_url | appendAssetDirectory" class="image">
        <hr>
        <div class="details">
          <span class="category_name center">{{category.category_name}}</span>
        </div>
        <div class="spacer">&nbsp;</div>
        <div class=" center"> <el-button type="info" size="small"  >Preview</el-button> <el-button type="primary"  size="small" >Select Theme</el-button> </div>
        <div class="spacer">&nbsp;</div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style scoped>
  .el-row{
    margin: auto;
  }
  .grid-content1 {
    border-radius: 4px;
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.37);
      overflow-y:hidden ;
      margin-top: 40px;
      margin-right: 40px;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
 }
  .spacer {
    height: 20px;
   }

  .image {
    width: 100%;
    display: block;

  }

  .category_name{
    font-size: 18px;
    font-family: Roboto;
    font-weight: 400;
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
