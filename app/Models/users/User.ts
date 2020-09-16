import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Sector from './Sector'
import Group from './Group'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public sector_id: number

  @column()
  public graduation: string

  @column()
  public IP: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public deletedAt: DateTime

  @column()
  public email: string

  @column()
  public rg: string

  @column()
  public password: string

  @hasOne(() => Sector)
  public sector: HasOne<typeof Sector>

  @manyToMany(() => Group, {
    pivotTable: 'groups_has_users',
  })
  public group: ManyToMany<typeof Group>
}
