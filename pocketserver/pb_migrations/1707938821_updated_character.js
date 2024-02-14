/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xoshambrz9ialzs")

  collection.name = "characters"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xoshambrz9ialzs")

  collection.name = "character"

  return dao.saveCollection(collection)
})
