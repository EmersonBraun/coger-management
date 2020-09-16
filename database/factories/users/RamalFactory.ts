import Factory from '@ioc:Adonis/Lucid/Factory'
import Ramal from 'App/Models/users/Ramal'
import { randomSectorId } from './SectorFactory'

export const RamalFactory = Factory
  .define(Ramal, async ({faker}) => ({
    ramal: faker.lorem.words(3),
    used: faker.random.boolean(),
    sector_id: await randomSectorId(),
  }))
  .build()

export async function randomRamalId () {
  const req = await Ramal.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
