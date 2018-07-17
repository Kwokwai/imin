import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import AppMain from '@/view/layout/components/appmain'
import Navbar from '@/view/layout/components/navbar'
import Sidebar from '@/view/layout/components/sidebar'
import Layout from '@/view/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/appmain',
      name: 'AppMain',
      component: AppMain
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
