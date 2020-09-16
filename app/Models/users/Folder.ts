import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Group from './Group'

export default class Folder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public folder: string

  @column()
  public active: boolean

  @manyToMany(() => Group, {
    pivotTable: 'folders_has_groups',
  })
  public group: ManyToMany<typeof Group>
}
