import Factory from '@ioc:Adonis/Lucid/Factory'
import Folder from 'App/Models/users/Folder'

export const FolderFactory = Factory
  .define(Folder, ({faker}) => ({
    folder: faker.lorem.words(3),
    active: faker.random.boolean(),
  }))
  .build()

export async function randomFolderId () {
  const req = await Folder.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
