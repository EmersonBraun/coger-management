import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RamalSchema = schema.create({
  ramal: schema.string(),
  used: schema.string(),
  sector_id: schema.number([
    rules.exists({ table: 'sectors', column: 'id' }),
  ]),
})
