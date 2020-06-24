const express = require('express');
const router = express.Router();
//import data from './data/products';
var app = express();

app.use('/api/hola', function(req, res) {
    res.send('Hola como estas: jorge');
});

// app.get("/api/getProducts", function(req, res) {
//     //res.send(data.products)
// });
app.listen(3002);
console.log('Eschado en http://localhost:5000')