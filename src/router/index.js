import { createRouter, createWebHistory } from 'vue-router';

import Masks from '../views/Masks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/masks',
      name: 'Masks',
      component: Masks
    }
  ]
})

export default router
