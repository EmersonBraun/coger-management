import auth from './auth'
import main from './main'
import numerator from './numerator'
import stock from './stock'
import users from './users'
import VTR from './VTR'

const routes = [
  ...auth,
  ...main,
  ...numerator,
  ...stock,
  ...users,
  ...VTR,
  {
    path: '*',
    component: () => import('@/pages/Error404.vue'),
  },
]

export default routes
