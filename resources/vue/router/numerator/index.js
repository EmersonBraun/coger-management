import main from './main'
import numerations from './numerations'
import options from './options'

export default [
  {
    path: '/numerador',
    component: () => import('@/layouts/Numerator.vue'),
    children: [
      ...main,
      ...numerations,
      ...options,
    ],
  },
]
