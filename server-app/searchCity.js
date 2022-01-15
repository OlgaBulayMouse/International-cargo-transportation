'use strict';

function searchCity(city, arr) {
    for (let n = 0; n <= arr.length; n++) {
        if (n <= arr.length - 1) {
            for (let i = 0; i <= arr[n].length; n[i++]) {
                if (arr[n][i] === city) {
                    return 'Hello, mister ! We are ready to cooperate with you!'
                };
            };
        } else return 'Sorry, unfortunately we are not on our way. We will be glad to cooperate next time';
    };
};

module.exports = searchCity;