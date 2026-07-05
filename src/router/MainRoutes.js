export default {
  path: '/',
  meta: {
    auth: true,
    layout: 'default',
  },
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/main/HomeView.vue'),
    },
    {
      path: 'reels',
      name: 'reels',
      component: () => import('@/views/main/ReelsPage.vue'),
    },
    {
      path: 'search',
      name: 'search',
      component: () => import('@/views/main/SearchPage.vue'),
    },
    {
      path: 'profile',
      name: 'profile',
      component: () => import('@/views/main/ProfilePage.vue'),
    },
  ],
}
