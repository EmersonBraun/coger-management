/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete } from '../../Services/CRUD'
import Numeration from '../../Models/numerator/Numeration'
import OptionsRepository from './OptionsRepository'
import { mountResponse } from 'App/Services/ResponseUtils'

class NumerationsRepository {
  protected model: any
  protected options: any

  constructor () {
    this.model = Numeration
    this.options = OptionsRepository
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async current () {
    const options = await this.options.all()
    const data = await Promise.all(options.data.map(async (option): Promise<any> => {
      const { name } = option.$attributes
      const ref = await this.getNextRef(name, this.getFullYear(), true)
      const sequence = await this.getNextSequence(name, true)
      return {
        name,
        ref,
        sequence,
      }
    }))
    return mountResponse(data,'load')
    // return await all(this.model)
  }

  async option (option: string) {
    option = decodeURIComponent(option)
    if (option === 'all') {
      const data = await Numeration.all()
      return mountResponse(data, 'load')
    }
    const data = await Numeration.query().where('option',option).orderBy('id','desc')
    return mountResponse(data, 'load')
  }

  async find (id) {
    return await find(this.model, id)
  }

  async getNextSequence (option, current = false) {
    const reg = await Numeration.query().where('option',option).max('sequence').first()
    let value = reg['max(`sequence`)']

    if (current) {
      return value
    }
    const next = !value ? 1 : ++value
    return next
  }

  async getNextRef (option, year, current = false) {
    const reg = await Numeration
      .query()
      .where('option',option)
      .where('year',year)
      .max('ref')
      .first()

    let value = reg['max(`ref`)']

    if (current) {
      return value
    }
    const next = !value ? 1 : ++value
    return next
  }

  getFullYear (value = 0) {
    return value || new Date().getFullYear()
  }

  async create (data: any) {
    data.year = this.getFullYear(data.year)
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
