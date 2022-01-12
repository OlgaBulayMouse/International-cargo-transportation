'use strict';
const express = require('express');
const app = express();
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const  searchCity  = require('./searchCity.js');
const ROUTER  = require('./Routers');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.post('/', (request, respons, next) => {
    const resultSearch = searchCity(request.body.city, ROUTER);
    console.log(request.body);
    respons.json(resultSearch);
    next();
});


app.listen(2022);