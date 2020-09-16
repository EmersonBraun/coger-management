export default [
  {
    path: '/patrimonios',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/patrimonies/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/patrimonies/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/patrimonies/Form.vue'),
      },
    ],
  },
]
