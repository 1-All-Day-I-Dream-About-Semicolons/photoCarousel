const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adidasProducts', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind((console, 'connection error:')));
db.once('open', () => {
    console.log(`we're connected!`);
});

const productSchema = new mongoose.Schema({
    name: String,
    photos: String
});

let Product = mongoose.model('Product', productSchema);

const insertOne = (name, photos) => {
    var product = new Product({
        name: name,
        photos: photos
    });
    product.save();
}

module.exports.product = Product;
module.exports.insertOne = insertOne;