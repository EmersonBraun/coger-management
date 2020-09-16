import { schema } from '@ioc:Adonis/Core/Validator'

export const SectorSchema = schema.create({
  sector: schema.string(),
  localization: schema.number(),
  active: schema.string(),
})
