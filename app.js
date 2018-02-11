const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
var moment = require('moment');



var app = express();
moment().format();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {
  res.render('home')
});
app.get('/insurance',(req,res) => {
  res.render('insurance')
});

app.listen(3000);
