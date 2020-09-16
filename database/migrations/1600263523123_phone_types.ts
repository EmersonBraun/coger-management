import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PhoneTypes extends BaseSchema {
  protected tableName = 'phone_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('phone_type').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}