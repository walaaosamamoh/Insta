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

router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem('user')

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'login' }
  }
})
