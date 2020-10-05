/* eslint-disable max-len */
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Numeration from 'App/Models/numerator/Numeration'
import { dump } from './numerationDUMP'

export default class NumerationSeeder extends BaseSeeder {
  public async run () {
    await Numeration.createMany(dump)
  }
}
