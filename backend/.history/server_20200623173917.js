const express = require('express');
const router = express.Router();
//import data from './data/products';
var app = express();

app.use(router);
router.get('/api/hola', function(req, res) {
    res.send('Hola GET como estas: jorgea');
});

// app.get("/api/getProducts", function(req, res) {
//     //res.send(data.products)
// });
app.listen(3002);
console.log('Eschado en http://localhost:3000')