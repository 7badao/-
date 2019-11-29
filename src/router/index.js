import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/myModel',
    component: () => import('../components/myModel.vue')
  }]
})
