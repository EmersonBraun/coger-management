import { schema } from '@ioc:Adonis/Core/Validator'

export const GraduationSchema = schema.create({
  graduation: schema.string(),
  hidden: schema.string(),
})
