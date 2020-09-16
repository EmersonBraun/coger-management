export default [
  {
    path: '/setores',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/sectors/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/sectors/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/sectors/Form.vue'),
      },
    ],
  },
]
