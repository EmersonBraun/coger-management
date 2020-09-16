import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Options extends BaseSchema {
  protected tableName = 'options'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('name').notNullable()
      table.string('abbreviation').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}