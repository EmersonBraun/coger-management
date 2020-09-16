import main from './main'
import IPS from './IPS'
import contacts from './contacts'
import folders from './folders'
import graduations from './graduations'
import groups from './groups'
import patrimonies from './patrimonies'
import phoneTypes from './phoneTypes'
import ramals from './ramals'
import sectors from './sectors'
import users from './users'

export default [
  {
    path: '/usuarios',
    component: () => import('@/layouts/Main.vue'),
    children: [
      ...main,
      ...IPS,
      ...contacts,
      ...folders,
      ...graduations,
      ...groups,
      ...patrimonies,
      ...phoneTypes,
      ...ramals,
      ...sectors,
      ...users,
    ],
  },
]
