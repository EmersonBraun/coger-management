import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Sector from './Sector'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ddd: string

  @column()
  public number: string

  @column()
  public active: boolean

  @column()
  public phone_type: number

  @column()
  public user_id: number

  @column()
  public sector_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Sector)
  public sector: HasOne<typeof Sector>
}
