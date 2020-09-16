import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { FolderFactory } from '../factories/users/FolderFactory'

export default class FolderSeeder extends BaseSeeder {
  public async run () {
    await FolderFactory.createMany(10)
  }
}
