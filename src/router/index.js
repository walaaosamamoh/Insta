import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    AuthRoutes,
    MainRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
