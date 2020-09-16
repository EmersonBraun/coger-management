import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sectors extends BaseSchema {
  protected tableName = 'sectors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('sector').notNullable()
      table.integer('localization').notNullable()
      table.boolean('active').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}