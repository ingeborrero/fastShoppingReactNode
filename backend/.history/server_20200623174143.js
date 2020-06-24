const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
//import data from './data/products';
var app = express();

app.use(bodyParser);
app.use(router);
router.get('/api/hola', function(req, res) {
    console.log(req.body);
    res.send('Hola GET como estas: jorgeass');
});

// app.get("/api/getProducts", function(req, res) {
//     //res.send(data.products)
// });
app.listen(3002);
console.log('Eschado en http://localhost:3000')