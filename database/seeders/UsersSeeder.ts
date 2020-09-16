import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserFactory } from '../factories/users/UserFactory'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await UserFactory.createMany(10)
  }
}
