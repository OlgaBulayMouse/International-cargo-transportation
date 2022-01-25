'use strict';

const nodemailer = require('nodemailer');
const mail = require('../controller');
const resultSearch = require('./serviceSearch');

const sendEmailService = () => {
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
            to: mail,
            subject: 'Message from carrier',
            text: resultSearch,
        };
    
        transporter.sendMail(mailOptions, () => {
            if (info) {
                console.log(`Email sent to ${mail}: ${info}`);
            } else console.log('No send!');
        });
    };
    
    sendEmail(resultSearch);
};

module.exports = sendEmailService;

