import Vue from 'vue'
import Router from 'vue-router'
import OneReport from '@/components/OneReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'oneReport',
      component: OneReport
    }
  ]
})
