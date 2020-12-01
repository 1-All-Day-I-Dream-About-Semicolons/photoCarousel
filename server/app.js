const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('../db/index.js');

// 18.144.83.48:3001

app.use(morgan('dev'));
app.use('/photos/:id', express.static(__dirname + '/../client/dist'));
// app.use(express.static(__dirname + '/../client/dist'));

// app.get('*/:id/photos', (req, res) => {
//     db.product.find((err, data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// });

app.get('*/:id/photos', (req, res) => {
    var id = req.params.id;
    if (id > 100 || id < 1) {
        res.sendStatus(404);
    } else {
        db.product.find({ id: id }, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(404);
            } else {
                res.send(data);
            }
        });
    }
});

module.exports = app;