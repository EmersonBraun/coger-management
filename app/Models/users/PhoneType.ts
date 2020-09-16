import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PhoneType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phone_type: string
}
