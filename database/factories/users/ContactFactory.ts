import Factory from '@ioc:Adonis/Lucid/Factory'
import Contact from 'App/Models/users/Contact'
import { randomUserId } from './UserFactory'
import { randomSectorId } from './SectorFactory'

export const ContactFactory = Factory
  .define(Contact, async ({faker}) => ({
    ddd: faker.lorem.words(3),
    number: faker.lorem.words(3),
    active: faker.random.boolean(),
    phone_type: faker.random.number({min:1, max:10}),
    user_id: await randomUserId(),
    sector_id: await randomSectorId(),
  }))
  .build()

export async function randomContactId () {
  const req = await Contact.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
