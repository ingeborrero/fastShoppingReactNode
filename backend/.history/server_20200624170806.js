const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const response = require('./response');
let products = require('./data/products.json');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(router);

router.get('/api/test', function(req, res) {
    console.log(req.query);
    res.send('Hola GET como estas: jorge');
});
    
router.get("/api/getProducts", function(req, res) {
    if(products) {
        response.error(req, res, 'Error in server', 500);
    }
    else {
        res.send(products)
    }
});
app.listen(3002);
console.log('Listening by http://localhost:3002 from test FastShopping')