const express = require('express');
//import data from './data/products';
var app = express();

app.use('/api/hola', function(req, res) {
    res.send('Hola como estas');
});

// app.get("/api/getProducts", function(req, res) {
//     //res.send(data.products)
// });
app.listen(5000);
console.log('Eschado en http://localhost:5000')