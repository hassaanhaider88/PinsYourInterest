const express = require('express');
const path = require('path');
const app = express();
var userModule = require('../models/user_model');
var router= express.Router();
var IsLoggedIn= require('../middlewares/IsLoggedIn.js');
const PinsData = require('../public/Data/Pins.js');

var jwt = require('jsonwebtoken');
// var Cookies = require('cookies');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



router.get('/', IsLoggedIn,(req, res, next) => {
});

module.exports = router;
