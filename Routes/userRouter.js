var express = require('express');
var app = express();
var router= express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var userModule = require('../models/user_model');
var upload = require("../CloudConfig/multerConfig.js")

var { SignInUser,LoginUser,LogOut,showMyProfile,savePosts,ProfileChange,EditUserInfo,SaveProfileChanges,FollowUser} =require('../controllers/userController.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',(req,res,next)=>{
    res.render('Profile',{IsHome:false,IsCreate:false});
});
router.get('/login',(req,res,next)=>{
    res.render('login' ,{ query: req.query })
  });
router.post('/login',LoginUser)  
router.post('/create-user', SignInUser);
router.get('/signin',(req,res,next)=>{
     res.render('SignIn',{ query: req.query })
});
router.get('/savedpost/:postid',savePosts)
router.post('/upload_profile', upload.single('profile'),ProfileChange);
router.get('/edit',EditUserInfo)
router.post('/save_changes',SaveProfileChanges)
router.get('/follow_user/:user_id',FollowUser)
router.get('/logout',LogOut)

router.get('/:user_id([a-zA-Z0-9]+)',showMyProfile)   // user id which is log in 

    // create user router 


module.exports=router;