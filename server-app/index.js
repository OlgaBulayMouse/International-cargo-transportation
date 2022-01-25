'use strict';

const express = require('express');
const app = express();
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./controller')

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.use(router);

app.listen(2022);