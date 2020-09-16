import Factory from '@ioc:Adonis/Lucid/Factory'
import Patrimonie from 'App/Models/users/Patrimonie'
import { randomSectorId } from './SectorFactory'

export const PatrimonieFactory = Factory
  .define(Patrimonie, async ({faker}) => ({
    patrimony: faker.lorem.words(3),
    pmpr_code: faker.lorem.words(3),
    description: faker.lorem.words(3),
    color: faker.lorem.words(3),
    brand: faker.lorem.words(3),
    serial: faker.lorem.words(3),
    manufacture_year: faker.random.number({min:1, max:10}),
    obs: faker.lorem.words(3),
    sector_id: await randomSectorId(),
  }))
  .build()

export async function randomPatrimonieId () {
  const req = await Patrimonie.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
