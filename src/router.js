import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/sign.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/about2',
      component: () => import('./views/About2.vue')
    },
    {
      path: '/photos/card',
      component: () => import('./views/photos/card.vue')
    },
    {
      path: '/photos/layout',
      component: () => import('./views/photos/layout.vue')
    },
    {
      path: '/photos/notes',
      component: () => import('./views/photos/notes.vue')
    },
    {
      path: '/photos/axios',
      component: () => import('./views/photos/axios.vue')
    },
    {
      path: '/photos/mother',
      component: () => import('./views/photos/mother')
    },
    {
      path: '/*',
      component: () => import('./views/e404.vue')
    }
  ]
})
