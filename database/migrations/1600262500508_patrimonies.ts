import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Patrimonies extends BaseSchema {
  protected tableName = 'patrimonies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('patrimony').notNullable()
      table.string('pmpr_code').nullable()
      table.string('description').notNullable()
      table.string('color').nullable()
      table.string('brand').notNullable()
      table.string('serial').nullable()
      table.integer('manufacture_year').nullable()
      table.text('obs').nullable()
      table.integer('sector_id').nullable()

      table.foreign('sector_id').references('id').inTable('sectors').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}