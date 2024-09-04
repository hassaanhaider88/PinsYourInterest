require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Pinsdata=require('./public/Data/Pins.js');
const { mongoose } = require('mongoose');
const connectDB = require('./config/db');
var userRouter= require('./Routes/userRouter.js');
var FeedHomeRouter = require('./Routes/FeedHomeRouter.js');
var PinRouter= require('./Routes/PinRouter.js');
const Cookies = require('cookies');
const PORT = process.env.PORT || 8000;




var app = express();
connectDB();
app.use(cookieParser())


// Set up the cookies middleware
app.use((req, res, next) => {
  req.cookies = new Cookies(req, res);
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
let ShowLogin = false;


app.use('/',FeedHomeRouter);
app.use('/user', userRouter);
app.use('/pin',PinRouter)




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;
