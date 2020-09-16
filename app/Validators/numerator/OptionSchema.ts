import { schema } from '@ioc:Adonis/Core/Validator'

export const OptionSchema = schema.create({
  name: schema.string(),
  abbreviation: schema.string(),
})
