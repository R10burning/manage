import Vue from 'vue'
import Router from 'vue-router'
import test from '../components/test'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'currentTab',
  mode: 'history',
  routes: [{
    path: '/test',
    name: 'test',
    component: test
  }]
})
