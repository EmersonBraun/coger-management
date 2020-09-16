import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('name').notNullable()
      table.integer('sector_id').notNullable()
      table.string('graduation').notNullable()
      table.string('IP').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
      table.string('email').nullable()
      table.string('rg').notNullable()
      table.string('password').notNullable()

      table.foreign('sector_id').references('id').inTable('sectors').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}