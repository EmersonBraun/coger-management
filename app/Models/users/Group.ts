import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Folder from './Folder'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public group: string

  @column()
  public active: boolean

  @manyToMany(() => User, {
    pivotTable: 'groups_has_users',
  })
  public user: ManyToMany<typeof User>

  @manyToMany(() => Folder, {
    pivotTable: 'folders_has_groups',
  })
  public folder: ManyToMany<typeof Folder>
}
