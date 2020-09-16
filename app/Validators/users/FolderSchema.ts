import { schema } from '@ioc:Adonis/Core/Validator'

export const FolderSchema = schema.create({
  folder: schema.string(),
  active: schema.string(),
})
