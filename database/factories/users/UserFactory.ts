import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/users/User'
import { randomSectorId } from './SectorFactory'

export const UserFactory = Factory
  .define(User, async ({faker}) => ({
    name: faker.lorem.words(3),
    graduation: faker.lorem.words(3),
    IP: faker.lorem.words(3),
    created_at: faker.date.future(2),
    updated_at: faker.date.future(2),
    deleted_at: faker.date.future(2),
    email: faker.lorem.words(3),
    rg: faker.lorem.words(3),
    password: faker.lorem.words(3),
    sector_id: await randomSectorId(),
  }))
  .build()

export async function randomUserId () {
  const req = await User.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
