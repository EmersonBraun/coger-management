export default [
  {
    path: '/graduacoes',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/graduations/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/graduations/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/graduations/Form.vue'),
      },
    ],
  },
]
