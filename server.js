const express = require('express');
const path = require('path');
const jade = require('jade');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('static'));

app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Pizza Express';
app.locals.pizzas = {};

app.post('/pizzas', (request, response) => {
  response.sendStatus(201);
});



app.get('/', (request, response) => {
  response.render('index');
});
if(!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}


module.exports = app;










