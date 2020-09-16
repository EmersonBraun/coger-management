import Factory from '@ioc:Adonis/Lucid/Factory'
import Option from 'App/Models/numerator/Option'

export const OptionFactory = Factory
  .define(Option, ({faker}) => ({
    name: faker.lorem.words(3),
    abbreviation: faker.lorem.words(3),
  }))
  .build()

export async function randomOptionId () {
  const req = await Option.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
