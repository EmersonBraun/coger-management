import main from './main'
import numerations from './numerations'
import options from './options'

export default [
  {
    path: '/numerador',
    component: () => import('@/layouts/Centered.vue'),
    children: [
      ...main,
      ...numerations,
      ...options,
    ],
  },
]
