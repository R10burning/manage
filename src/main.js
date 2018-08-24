// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Container from './components/container'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import store from './store'
import request from './api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$request = request

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    Container
  },
  template: '<Container/>'
})
