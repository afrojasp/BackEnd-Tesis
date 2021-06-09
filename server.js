const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes')
const db = require('./db')
var cors = require('cors')
const PUERTO = 3005;

db()

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());


router(app)

app.use('/app', express.static('public'));

app.listen(PUERTO, function(){
    console.log("Escuchando en el puerto " + PUERTO)
})
