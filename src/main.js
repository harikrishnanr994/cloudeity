import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import App from './App'
import Routes from './router/index.js'
import VueRouter from 'vue-router'
import locale from 'element-ui/lib/locale/lang/en'

//  Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
Vue.use(VueRouter)
Vue.component('icon', Icon)

const router = new VueRouter({
  routes: Routes
})

export const bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
