import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PatrimonieFactory } from '../factories/users/PatrimonieFactory'

export default class PatrimonieSeeder extends BaseSeeder {
  public async run () {
    await PatrimonieFactory.createMany(10)
  }
}
