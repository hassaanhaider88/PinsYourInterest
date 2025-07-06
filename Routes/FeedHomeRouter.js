const express = require("express");
const path = require("path");
const app = express();
var userModule = require("../models/user_model");
var router = express.Router();
var IsLoggedIn = require("../middlewares/IsLoggedIn.js");
const PinsData = require("../public/Data/Pins.js");
const jwt = require("jsonwebtoken");
var Cookies = require("cookies");
var userModel = require("../models/user_model.js");
var pins = require("../models/Pin_model.js");

// var Cookies = require('cookies');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

router.get("/", async (req, res) => {
  const token = req.cookies.get("token");
  var IsHome = true;
  var IsCreate = false;
  if (!token) {
    res.render("index");
  } else {
    try {
      var User = jwt.verify(token, process.env.JWT_SECT);
      var UserWhichLoggIn = await userModel
        .findOne({ email: User.email })
        .lean();
        console.log(UserWhichLoggIn)
      var AllPins = await pins.find();
      if (!AllPins) return res.send("something went wrong..");
      console.log(AllPins);
      console.log(AllPins.length);
      if (!UserWhichLoggIn) {
        res.render("index");
      } else {
        res.render("Home.ejs", {
          Data: PinsData,
          UserWhichLoggIn,
          IsHome,
          IsCreate,
        });
      }
    } catch (err) {
      res.render("index");
    }
  }
});

module.exports = router;
