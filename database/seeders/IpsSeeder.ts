import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { IpFactory } from '../factories/users/IpFactory'

export default class IpSeeder extends BaseSeeder {
  public async run () {
    await IpFactory.createMany(10)
  }
}
