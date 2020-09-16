import Factory from '@ioc:Adonis/Lucid/Factory'
import Sector from 'App/Models/users/Sector'

export const SectorFactory = Factory
  .define(Sector, ({faker}) => ({
    sector: faker.lorem.words(3),
    localization: faker.random.number({min:1, max:10}),
    active: faker.random.boolean(),
  }))
  .build()

export async function randomSectorId () {
  const req = await Sector.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
