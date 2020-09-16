export default [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('@/pages/numerator/numerations/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/numerator/numerations/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/numerator/numerations/Form.vue'),
      },
    ],
  },
]
