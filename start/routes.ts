/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route
  .group(() => {
    // numerator
    Route.resource('options','OptionsController').apiOnly()
    Route.resource('numerations','NumerationsController').apiOnly()
    //users
    Route.resource('ramals','RamalsController').apiOnly()
    Route.resource('sectors','SectorsController').apiOnly()
    Route.resource('patrimonies','PatrimoniesController').apiOnly()
    Route.resource('users','UsersController').apiOnly()
    Route.resource('ips','IpsController').apiOnly()
    Route.resource('graduations','GraduationsController').apiOnly()
    Route.resource('groups','GroupsController').apiOnly()
    Route.resource('folders','FoldersController').apiOnly()
    Route.resource('contacts','ContactsController').apiOnly()
    Route.resource('phone-types','PhoneTypesController').apiOnly()
    //stock
    //VTR
  })
  .prefix('/api')

Route.on('*').render('app')
