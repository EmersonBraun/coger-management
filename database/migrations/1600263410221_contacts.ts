import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contacts extends BaseSchema {
  protected tableName = 'contacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('ddd').nullable()
      table.string('number').notNullable()
      table.boolean('active').nullable()
      table.integer('phone_type').notNullable()
      table.integer('user_id').nullable()
      table.integer('sector_id').nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('sector_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}