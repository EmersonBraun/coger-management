import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ramals extends BaseSchema {
  protected tableName = 'ramals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('ramal').notNullable()
      table.boolean('used').nullable()
      table.integer('sector_id').nullable()

      table.foreign('sector_id').references('id').inTable('sectors').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}