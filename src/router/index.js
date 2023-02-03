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
    {
      path: '/resources/publications',
      name: 'resources-publications',
      component: () => import('../views/Publications.vue')
    },
    {
      path: '/resources/workshops',
      name: 'resources-workshops',
      component: () => import('../views/Workshops.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/use-case',
      name: 'use-case',
      component: () => import('../views/UseCase.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0,  behavior: 'smooth',}
  },
})

export default router
