import Factory from '@ioc:Adonis/Lucid/Factory'
import PhoneType from 'App/Models/users/PhoneType'

export const PhoneTypeFactory = Factory
  .define(PhoneType, ({faker}) => ({
    phone_type: faker.lorem.words(3),
  }))
  .build()

export async function randomPhoneTypeId () {
  const req = await PhoneType.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
