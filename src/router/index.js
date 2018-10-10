import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Article from '../views/article/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'index',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('@/views/imin/index')
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/imin/index'),
        meta: { title: 'imin管理后台', icon: 'nested' }
      }
    ]
  },
  {
    path: '/articlelist',
    component: Layout,
    children: [
      {
        path: '',
        name: 'ArticleList',
        component: () => import('@/views/articleList/index'),
        meta: { title: '文章列表', icon: 'table' }
      }
    ]
  },
  {
    path: '/create',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Create',
        component: () => import('@/views/create/index'),
        meta: { title: '新建文章', icon: 'form' }
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    hidden: true,
    component: Layout,
    children: [
      {
        path: '',
        name: 'Article',
        component: () => import('@/views/article/index'),
        // meta: { title: '新建文章', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
