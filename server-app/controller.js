'use strict';
const sendEmailService = require('./service/serviceSendEmail');
const searchCityService = require('./service/serviceSearch');
const express = require('express');
const router = express.Router();

router.post('/', async (request, respons, next) => {
    const nameCustomer = request.body.fullname;
    const mail = request.body.mail;
    const citys = request.body.citys;

    const data = searchCityService(nameCustomer, mail, citys);

    const info = sendEmailService(data)
   
    respons.json(info);
});

module.exports = router;