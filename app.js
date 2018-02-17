const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
var moment = require('moment');
const port = process.env.PORT || 3000;




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
app.get('/funeral',(req,res) => {
  res.render('funeralHD')
});
app.get('/Benificiary',(req,res) => {
  res.render('Beneficiary')
});
app.get('/Health',(req,res) => {
  res.render('HealthDep')
});
app.get('/hospital',(req,res) => {
  res.render('hospital');
});
app.listen(port);
