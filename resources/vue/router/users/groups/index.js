export default [
  {
    path: '/grupos',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/groups/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/groups/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/groups/Form.vue'),
      },
    ],
  },
]
