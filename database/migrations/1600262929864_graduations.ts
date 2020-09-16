import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Graduations extends BaseSchema {
  protected tableName = 'graduations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('graduation').notNullable()
      table.boolean('hidden').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}