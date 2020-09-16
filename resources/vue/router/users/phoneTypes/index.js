export default [
  {
    path: '/tipos-telefones',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/phoneTypes/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/phoneTypes/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/phoneTypes/Form.vue'),
      },
    ],
  },
]
