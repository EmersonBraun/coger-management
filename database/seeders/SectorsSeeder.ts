import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SectorFactory } from '../factories/users/SectorFactory'

export default class SectorSeeder extends BaseSeeder {
  public async run () {
    await SectorFactory.createMany(10)
  }
}
