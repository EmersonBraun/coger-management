export default [
  {
    path: '/login',
    component: () => import('@/layouts/Centered.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/Auth.vue'),
      },
    ],
  },
]
