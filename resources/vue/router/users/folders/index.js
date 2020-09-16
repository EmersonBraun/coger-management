export default [
  {
    path: '/pastas',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/folders/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/folders/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/folders/Form.vue'),
      },
    ],
  },
]
