import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OptionFactory } from '../factories/numerator/OptionFactory'

export default class OptionSeeder extends BaseSeeder {
  public async run () {
    await OptionFactory.createMany(10)
  }
}
