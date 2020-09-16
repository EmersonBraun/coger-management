import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ip extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public number: string

  @column()
  public used: boolean
}
