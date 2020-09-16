export default [
  {
    path: '/contatos',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/contacts/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/contacts/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/contacts/Form.vue'),
      },
    ],
  },
]
