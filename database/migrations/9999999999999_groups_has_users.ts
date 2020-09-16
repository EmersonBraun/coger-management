import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupsHasUsers extends BaseSchema {
  protected tableName = 'groups_has_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('group_id').unsigned().nullable()
      table.integer('user_id').unsigned().nullable()

      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
