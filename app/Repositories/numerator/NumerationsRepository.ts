/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete } from '../../Services/CRUD'
import Numeration from '../../Models/numerator/Numeration'

class NumerationsRepository {
  protected model: any

  constructor () {
    this.model = Numeration
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async find (id) {
    return await find(this.model, id)
  }

  async getNextSequence (option) {
    const reg = await Numeration.query().where('option',option).max('sequence').first()
    let value = reg['max(`sequence`)']
    const next = !value ? 1 : ++value
    return next
  }

  async getNextRef (option, year) {
    const reg = await Numeration
      .query()
      .where('option',option)
      .where('year',year)
      .max('ref')
      .first()

    let value = reg['max(`ref`)']
    const next = !value ? 1 : ++value
    return next
  }

  async create (data: any) {
    data.year = data.year || new Date().getFullYear()
    data.sequence = await this.getNextSequence(data.option)
    data.ref = await this.getNextRef(data.option, data.year)
    return await create(this.model, data)
  }

  async createOrUpdate (id: any, data: any) {
    return await createOrUpdate(this.model, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new NumerationsRepository()
