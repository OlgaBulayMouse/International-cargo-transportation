'use strict';

const searchCity = require('../searchCity.js');
const ROUTER = require('../Routers.js');

const searchCityService = (nameCustomer, mail, citys) => {

    if(typeof nameCustomer !== 'string' || typeof mail !== 'string' ||typeof citys === 'string') {
        return new Error('Incorrect  data format!');
    };
    
    let resultSearch = searchCity(citys, ROUTER);
    
    if (resultSearch === 'yes!') {
        resultSearch = `Hello, mister (madam) ${nameCustomer}! We are glad to cooperate with you. We will contact you shortly to clarify the details of the order.`;
    } else resultSearch = `Sorry, mister (madam) ${nameCustomer}! The terms of your order do not suit us. We look forward to working with you next time.`
    
    console.log(resultSearch);
};

module.exports = searchCityService;