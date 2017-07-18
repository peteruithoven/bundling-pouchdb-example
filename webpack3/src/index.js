import PouchDB from 'pouchdb';

PouchDB.debug.enable('pouchdb*');

const db = new PouchDB('kittens');
db.info().then(info => {
  console.log('info: ', info);
})

var doc = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
  "hobbies": [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
  ]
};
db.put(doc);

db.get('mittens').then(function (doc) {
  console.log('mittens doc: ', doc);
});

