export default [
  {
    path: '/ramais',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/ramals/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/ramals/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/ramals/Form.vue'),
      },
    ],
  },
]
