/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bhist5bu61ckzds",
    "created": "2024-02-14 19:07:53.972Z",
    "updated": "2024-02-14 19:07:53.972Z",
    "name": "openshipments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vhwbz5xa",
        "name": "character",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "xoshambrz9ialzs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "jpv8ee2l",
        "name": "shipment",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "yze4iuvkwo92qsh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "otad8h2l",
        "name": "progress",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bhist5bu61ckzds");

  return dao.deleteCollection(collection);
})
