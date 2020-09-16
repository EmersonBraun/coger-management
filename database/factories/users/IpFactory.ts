import Factory from '@ioc:Adonis/Lucid/Factory'
import Ip from 'App/Models/users/Ip'

export const IpFactory = Factory
  .define(Ip, ({faker}) => ({
    number: faker.lorem.words(3),
    used: faker.random.boolean(),
  }))
  .build()

export async function randomIpId () {
  const req = await Ip.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
