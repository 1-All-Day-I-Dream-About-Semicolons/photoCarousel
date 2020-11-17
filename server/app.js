const express = require('express');
const app = express();
const db = require('../db/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/products', (req, res) => {
    db.product.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/api/product/:id', function(req, res) {
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