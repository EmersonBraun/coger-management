import { schema } from '@ioc:Adonis/Core/Validator'

export const IpSchema = schema.create({
  number: schema.string(),
  used: schema.string(),
})
