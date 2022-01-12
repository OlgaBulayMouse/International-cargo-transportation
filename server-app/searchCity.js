'use strict';

function searchCity(city, arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === city) {
            return 'Hello, mister ! We are ready to cooperate with you!'
        };
    } return 'Sorry, unfortunately we are not on our way. We will be glad to cooperate next time.';
};

module.exports = searchCity;