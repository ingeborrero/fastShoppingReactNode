const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//const data = require('./data/products');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);
router.get('/api/hola', function(req, res) {
    console.log(req.query);
    res.send('Hola GET como estas: jorge');
});

// app.get("/api/getProducts", function(req, res) {
//     //res.send(data.products)
// });
app.listen(3002);
console.log('Eschado en http://localhost:3000')