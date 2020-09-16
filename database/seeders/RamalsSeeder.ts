import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { RamalFactory } from '../factories/users/RamalFactory'

export default class RamalSeeder extends BaseSeeder {
  public async run () {
    await RamalFactory.createMany(10)
  }
}
