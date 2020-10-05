import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import User from '../users/User'

export default class Numeration extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sequence: number

  @column()
  public ref: number

  @column()
  public year: number

  @column()
  public description: string

  @column()
  public option: string

  @column()
  public responsible: string

  @column()
  public ip: string

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
