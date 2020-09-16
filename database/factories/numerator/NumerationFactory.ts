import Factory from '@ioc:Adonis/Lucid/Factory'
import Numeration from 'App/Models/numerator/Numeration'
import { randomUserId } from '../users/UserFactory'

export const NumerationFactory = Factory
  .define(Numeration, async ({faker}) => ({
    sequence: faker.random.number({min:1, max:10}),
    ref: faker.random.number({min:1, max:10}),
    year: faker.random.number({min:1, max:10}),
    description: faker.lorem.words(3),
    created_at: faker.date.future(2),
    updated_at: faker.date.future(2),
    option: faker.lorem.words(3),
    user_id: await randomUserId(),
  }))
  .build()

export async function randomNumerationId () {
  const req = await Numeration.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
