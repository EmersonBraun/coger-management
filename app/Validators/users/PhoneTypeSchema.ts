import { schema } from '@ioc:Adonis/Core/Validator'

export const PhoneTypeSchema = schema.create({
  phone_type: schema.string(),
})
