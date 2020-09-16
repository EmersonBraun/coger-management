import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FoldersHasGroups extends BaseSchema {
  protected tableName = 'folders_has_groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('folder_id').unsigned().nullable()
      table.integer('group_id').unsigned().nullable()

      table.foreign('folder_id').references('id').inTable('folders').onDelete('CASCADE')
      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
