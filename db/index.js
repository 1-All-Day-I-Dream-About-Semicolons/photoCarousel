const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adidasProducts', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind((console, 'connection error:')));
db.once('open', () => {
    console.log(`we're connected!`);
});

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    photos: [{
        color: String,
        urls: [String]
    }]
});

/*
GET request id 1:
{
    id: 1,
    name: mensSoccerPants,
    photos: [
        {
            color: black,
            urls: [
                'url', 'url'...
            ]
        },
        {
            color: red,
            urls: [
                'url', 'url'...
            ]
        }
    ]
}
*/

let Product = mongoose.model('Product', productSchema);

const insertOne = (id, name, photos) => {
    var product = new Product({
        id: id,
        name: name,
        photos: photos
    });
    product.save();
}

Product.find();

// const find = () => {
//     this.product.find();
// }

module.exports.product = Product;
module.exports.insertOne = insertOne;
// module.exports.find = find;