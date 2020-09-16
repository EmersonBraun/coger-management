import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Graduation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public graduation: string

  @column()
  public hidden: boolean
}
