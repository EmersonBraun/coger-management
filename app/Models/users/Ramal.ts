import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Sector from './Sector'

export default class Ramal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ramal: string

  @column()
  public used: boolean

  @column()
  public sector_id: number

  @hasOne(() => Sector)
  public sector: HasOne<typeof Sector>
}
