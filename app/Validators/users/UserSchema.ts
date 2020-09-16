import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const UserSchema = schema.create({
  name: schema.string(),
  graduation: schema.string(),
  IP: schema.string(),
  email: schema.string(),
  rg: schema.string(),
  password: schema.string(),
  sector_id: schema.number([
    rules.exists({ table: 'sectors', column: 'id' }),
  ]),
})
