import Factory from '@ioc:Adonis/Lucid/Factory'
import Graduation from 'App/Models/users/Graduation'

export const GraduationFactory = Factory
  .define(Graduation, ({faker}) => ({
    graduation: faker.lorem.words(3),
    hidden: faker.random.boolean(),
  }))
  .build()

export async function randomGraduationId () {
  const req = await Graduation.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
