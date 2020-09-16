import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Sector from './Sector'

export default class Patrimonie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public patrimony: string

  @column()
  public pmpr_code: string

  @column()
  public description: string

  @column()
  public color: string

  @column()
  public brand: string

  @column()
  public serial: string

  @column()
  public manufacture_year: number

  @column()
  public obs: string

  @column()
  public sector_id: number

  @hasOne(() => Sector)
  public sector: HasOne<typeof Sector>
}
