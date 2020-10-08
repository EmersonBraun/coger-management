export default [
  {
    path: 'lista',
    component: () => import('@/pages/numerator/numerations/Index.vue'),
  },
  {
    path: 'lista/todos',
    component: () => import('@/pages/numerator/numerations/All.vue'),
  },
  {
    path: 'lista/:option',
    component: () => import('@/pages/numerator/numerations/Option.vue'),
  },
]
