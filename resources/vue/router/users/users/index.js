export default [
  {
    path: '/usuarios',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/users/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/users/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/users/Form.vue'),
      },
    ],
  },
]
