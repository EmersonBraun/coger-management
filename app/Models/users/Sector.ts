import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sector extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sector: string

  @column()
  public localization: number

  @column()
  public active: boolean
}
