const data = require('./seedData.js');
const db = require('./db/index.js');

const seedDatabase = (obj) => {
    var keys = Object.keys(obj);
    for (let i = 1; i <= 100; i++) {
        var randomIndex = Math.floor(Math.random() * keys.length);
        var name = keys[randomIndex];
        var photos = obj[name];
        var photosArray = [];
        for (var color in photos) {
            var colorObj = {};
            colorObj.color = color;
            colorObj.urls = photos[color];
            photosArray.push(colorObj);
        }
        db.insertOne(i, name, photosArray);
    }
}

seedDatabase(data);

/*
{
    id: 1,
    name: mensSoccerPants,
    photos: [
        {
            color: black,
            urls: [
            'https://adidasphotogallery.s3-us-west-1.amazonaws.com/1-mensSoccerPants/black/1.jpg',
            'https://adidasphotogallery.s3-us-west-1.amazonaws.com/1-mensSoccerPants/black/2.jpg'
        ]
        },
        {
            color: red,
            urls: [
            'https://adidasphotogallery.s3-us-west-1.amazonaws.com/1-mensSoccerPants/red/1.jpg',
            'https://adidasphotogallery.s3-us-west-1.amazonaws.com/1-mensSoccerPants/red/2.jpg'
        ]
        },
        {
            color: white,
            urls: [
            'https://adidasphotogallery.s3-us-west-1.amazonaws.com/1-mensSoccerPants/white/1.jpg',
            'https://adidasphotogallery.s3-us-west-1.amazonaws.com/1-mensSoccerPants/white/2.jpg'
        ]
        }
    ]
}
*/