const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { ROUTER } = require('./Routers');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.post('/', (request, respons, next) => {
  //  ROUTER.includes(formDate.city);
    //if (formDate.city) {
      //  return `Hello! We are ready to cooperate with you!`
    //} else return 'Sorry, unfortunately we are not on our way. We will be glad to cooperate next time.'
    console.log(request.body);
    respons.json(request.body);
    next();
});

app.listen(2022);