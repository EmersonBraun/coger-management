import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Folders extends BaseSchema {
  protected tableName = 'folders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('folder').notNullable()
      table.boolean('active').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}