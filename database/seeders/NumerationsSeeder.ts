import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { NumerationFactory } from '../factories/numerator/NumerationFactory'

export default class NumerationSeeder extends BaseSeeder {
  public async run () {
    await NumerationFactory.createMany(10)
  }
}
