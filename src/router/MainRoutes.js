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
      component: () => import('@/views/HomeView.vue'),
    },
  ],
}
