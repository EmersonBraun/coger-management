import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Numerations extends BaseSchema {
  protected tableName = 'numerations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.integer('sequence').nullable()
      table.integer('ref').nullable()
      table.integer('year').nullable()
      table.text('description').notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.string('option').notNullable()
      table.integer('user_id').notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}