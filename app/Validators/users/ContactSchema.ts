import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ContactSchema = schema.create({
  ddd: schema.string(),
  number: schema.string(),
  active: schema.string(),
  phone_type: schema.number(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  sector_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
