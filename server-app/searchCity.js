'use strict'

function searchCity(city, arr) {
    for (let n = 0; n <= arr.length; n++) {
        if (n <= arr.length - 1) {
            for (let i = 0; i <= arr[n].length; n[i++]) {
                if (arr[n][i] === city) {
                    return 'yes!'
                };
            };
        } else return 'no!';
    };
};

module.exports = searchCity;