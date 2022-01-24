'use strict';
const express = require('express');
const app = express();
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchCity = require('./searchCity.js');
const ROUTER = require('./Routers');
const nodemailer = require('nodemailer');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.post('/', (request, respons) => {
    let resultSearch = searchCity(request.body.citys, ROUTER);
    const nameCustomer = request.body.fullname;

    if (resultSearch === 'yes!') {
        resultSearch = `Hello, mister (madam) ${nameCustomer}! We are glad to cooperate with you. We will contact you shortly to clarify the details of the order.`;
    } else resultSearch = `Sorry, mister (madam) ${nameCustomer}! The terms of your order do not suit us. We look forward to working with you next time.`

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'olga281205',
            pass: 'WT)Jz$2KgsHsvga',
        },
    });
    
    function sendEmail(info) {
        const mailOptions = {
            from: 'olga281205@yandex.ru',
            to: request.body.mail,
            subject: 'Message from carrier',
            text: resultSearch,
        };
    
        transporter.sendMail(mailOptions, () => {
            if (info) {
                console.log(`Email sent to ${request.body.mail}: ${info}`);
            } else console.log('No send!');
        });
    };

    sendEmail(resultSearch);

    console.log(request.body);
    respons.json(resultSearch);
});
app.listen(2022);