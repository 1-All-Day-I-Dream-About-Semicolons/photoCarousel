const data = require('./seedData.js');
const db = require('./db/index.js');

const randomProduct = (obj) => {
    var keys = Object.keys(obj);
    
    // only adding 2 products for now, will change to 100 later
    for (let i = 1; i <= 2; i++) {
        var randomInt = Math.floor(Math.random() * keys.length);
        var randomItem = keys[randomInt];
        db.insertOne(randomItem, JSON.stringify(obj[randomItem]));
    }
}

randomProduct(data);