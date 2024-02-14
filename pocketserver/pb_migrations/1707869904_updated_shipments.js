/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yze4iuvkwo92qsh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1cawshib",
    "name": "wowheadlink",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yze4iuvkwo92qsh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1cawshib",
    "name": "wowheadlink",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "wowhead.com"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
