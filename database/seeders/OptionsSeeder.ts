import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Option from 'App/Models/numerator/Option'

export default class OptionSeeder extends BaseSeeder {
  public async run () {
    await Option.createMany([
      {name: 'Boletim', abbreviation: 'boletim'},
      {name: 'Boletim Reservado', abbreviation: 'BR'},
      {name: 'BR Corregedor', abbreviation: 'BRC'},
      {name: 'Cautela', abbreviation: 'cautela'},
      {name: 'Certidão', abbreviation: 'certidao'},
      {name: 'Despacho', abbreviation: 'despacho'},
      {name: 'Informação', abbreviation: 'informacao'},
      {name: 'Memorando', abbreviation: 'memorando'},
      {name: 'Memorando Reservado', abbreviation: 'memorandoreservado'},
      {name: 'Nota Boletim', abbreviation: 'notaboletim'},
      {name: 'Nota Instrução', abbreviation: 'notainstrucao'},
      {name: 'Nota Serviço', abbreviation: 'notaservico'},
      {name: 'Ofício', abbreviation: 'oficio'},
      {name: 'Orientação', abbreviation: 'orientacao'},
      {name: 'Parecer', abbreviation: 'parecer'},
      {name: 'Parte', abbreviation: 'parte'},
      {name: 'Portaria', abbreviation: 'portaria'},
      {name: 'Termo Entrega', abbreviation: 'termoentrega'},
      {name: 'Termo Exame', abbreviation: 'termoexame'},
      {name: 'Termo Recebimento', abbreviation: 'termorecebimento'},
    ])
  }
}
