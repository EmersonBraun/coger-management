import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const NumerationSchema = schema.create({
  sequence: schema.number.optional(),
  ref: schema.number.optional(),
  year: schema.number.optional(),
  description: schema.string(),
  option: schema.string(),
  responsible: schema.string(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
