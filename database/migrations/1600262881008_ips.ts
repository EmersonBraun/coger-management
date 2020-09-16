import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ips extends BaseSchema {
  protected tableName = 'ips'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('number').notNullable()
      table.boolean('used').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}