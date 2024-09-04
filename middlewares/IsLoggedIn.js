const jwt = require('jsonwebtoken');
var Cookies = require('cookies');
var PinsData = require('../public/Data/Pins.js');
var userModel =  require('../models/user_model.js')
var PinModel = require('../models/Pin_model.js')

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.get('token');
    var IsHome = true;
    var IsCreate =  false;
    if (!token) {
         res.render('index');
    }else{
    try {
        var User = jwt.verify(token, process.env.JWT_SECT);
        var UserWhichLoggIn = await userModel.findOne({ email: User.email }).lean(); 
        var AllPins = await PinModel.find().sort({ createdAt: -1 });
        if(!AllPins) return res.send('something went wrong..');

        console.log(AllPins.length);
       if(!UserWhichLoggIn) {
        res.render('index');
        next();
      }else{
       res.render('Home', { Data: AllPins,UserWhichLoggIn, IsHome, IsCreate }); 
        next();
      }
    } catch (err) {
        res.render('index');
        next();
    }
};
}
module.exports = isLoggedIn;
