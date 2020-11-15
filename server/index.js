const express = require('express');
const app = express();
const db = require('../db/index.js');
const PORT = 3001;

app.use(express.static(__dirname + '/public'));

app.get('/api/products', (req, res) => {
    db.product.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

// var id = 1;

// app.get(`/api/product/${id}/photos`, (req, res) => {
//     db.product.find({ '"_id":ObjectId("5faed31045886b6924fa7838")' }, (err, data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// });

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});