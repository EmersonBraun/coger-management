import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PhoneTypeFactory } from '../factories/users/PhoneTypeFactory'

export default class PhoneTypeSeeder extends BaseSeeder {
  public async run () {
    await PhoneTypeFactory.createMany(10)
  }
}
