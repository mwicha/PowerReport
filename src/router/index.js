import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import OneReport from '@/components/OneReport'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'index',
      component: Menu
    },
    {
      path: '/oneReport',
      name: 'oneReport',
      component: OneReport
    }
  ]
})
