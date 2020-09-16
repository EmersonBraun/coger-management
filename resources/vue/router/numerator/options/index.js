export default [
  {
    path: '/opcoes',
    children: [
      {
        path: '',
        component: () => import('@/pages/numerator/options/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/numerator/options/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/numerator/options/Form.vue'),
      },
    ],
  },
]
