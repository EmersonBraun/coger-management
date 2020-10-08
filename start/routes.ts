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
    Route.resource('options','numerator/OptionsController').apiOnly()
    Route.get('numerations-current','numerator/NumerationsController.current')
    Route.get('numerations/:option','numerator/NumerationsController.option')
    Route.resource('numerations','numerator/NumerationsController').apiOnly()
    //users
    Route.resource('ramals','users/RamalsController').apiOnly()
    Route.resource('sectors','users/SectorsController').apiOnly()
    Route.resource('patrimonies','users/PatrimoniesController').apiOnly()
    Route.resource('users','users/UsersController').apiOnly()
    Route.resource('ips','users/IpsController').apiOnly()
    Route.resource('graduations','users/GraduationsController').apiOnly()
    Route.resource('groups','users/GroupsController').apiOnly()
    Route.resource('folders','users/FoldersController').apiOnly()
    Route.resource('contacts','users/ContactsController').apiOnly()
    Route.resource('phone-types','users/PhoneTypesController').apiOnly()
    //stock
    //VTR
  })
  .prefix('/api')

Route.on('*').render('app')
