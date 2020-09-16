import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PatrimonieSchema = schema.create({
  patrimony: schema.string(),
  pmpr_code: schema.string(),
  description: schema.string(),
  color: schema.string(),
  brand: schema.string(),
  serial: schema.string(),
  manufacture_year: schema.number(),
  obs: schema.string(),
  sector_id: schema.number([
    rules.exists({ table: 'sectors', column: 'id' }),
  ]),
})
