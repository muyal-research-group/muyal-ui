import { createRouter, createWebHistory } from 'vue-router'
import MuyalView from "../views/Muyal.vue";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'muyal',
      component: MuyalView
    },
    {
      path: '/nez',
      name: 'nez',
      component: () => import('../views/Nez.vue')
    },
    {
      path: '/chimalli',
      name: 'chimalli',
      component: () => import('../views/Chimalli.vue')
    },
    {
      path: '/painal',
      name: 'painal',
      component: () => import('../views/Painal.vue')
    },
    {
      path: '/xelhua',
      name: 'xelhua',
      component: () => import('../views/Xelhua.vue')
    },
    {
      path: '/alwa',
      name: 'alwa',
      component: () => import('../views/Alwa.vue')
    },
  ]
})

export default router
