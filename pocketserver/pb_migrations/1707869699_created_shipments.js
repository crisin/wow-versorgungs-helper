/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yze4iuvkwo92qsh",
    "created": "2024-02-14 00:14:59.652Z",
    "updated": "2024-02-14 00:14:59.652Z",
    "name": "shipments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7xswl1aj",
        "name": "item",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ekvenfsi",
        "name": "quantity",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("yze4iuvkwo92qsh");

  return dao.deleteCollection(collection);
})
