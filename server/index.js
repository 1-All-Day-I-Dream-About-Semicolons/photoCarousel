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

app.get('/api/product/:id', function(req, res) {
    var id = req.params.id;
    db.product.find({ id: id }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});