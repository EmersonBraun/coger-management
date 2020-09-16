export default [
  {
    path: '/ips',
    children: [
      {
        path: '',
        component: () => import('@/pages/users/IPS/Index.vue'),
      },
      {
        path: 'criar',
        component: () => import('@/pages/users/IPS/Form.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('@/pages/users/IPS/Form.vue'),
      },
    ],
  },
]
