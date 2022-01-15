'use strict';
const express = require('express');
const app = express();
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchCity = require('./searchCity.js');
const ROUTER = require('./Routers');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.post('/', (request, respons, next) => {
    const nameCustomer = request.body.fullname;
    let resultSearch = searchCity(request.body.citys, ROUTER);
    if (resultSearch === 'yes!') {
        resultSearch = `Hello, mister (madam) ${nameCustomer}! We are glad to cooperate with you. We will contact you shortly to clarify the details of the order.`;
    } else resultSearch = `Sorry, mister (madam) ${nameCustomer}! The terms of your order do not suit us. We look forward to working with you next time.`
    console.log(request.body);
    respons.json(resultSearch);
    next();
});

app.listen(2022);