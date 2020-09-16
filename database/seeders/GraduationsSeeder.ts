import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { GraduationFactory } from '../factories/users/GraduationFactory'

export default class GraduationSeeder extends BaseSeeder {
  public async run () {
    await GraduationFactory.createMany(10)
  }
}
