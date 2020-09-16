import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const NumerationSchema = schema.create({
  sequence: schema.number(),
  ref: schema.number(),
  year: schema.number(),
  description: schema.string(),
  option: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
