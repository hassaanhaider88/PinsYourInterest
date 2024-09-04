var express = require('express');
var app = express();
var router= express.Router();
var path = require('path');
var upload= require('../CloudConfig/multerConfig.js');
var { ShowSinglePin,ShowCreatePin,CreatePin,FollowUser,CommentOnPin,DelComment } = require('../controllers/pinController.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/create',ShowCreatePin);

var Full_shareUri = window.location;
console.log(Full_shareUri);

// ([a-zA-Z0-9]+) this is becuase the /create route also capture by :pin_id 
router.get('/:pin_id([a-zA-Z0-9]+)', ShowSinglePin);
router.post('/create_pin',upload.single('pinPic'),CreatePin)
router.get('/follow_user/:userid',FollowUser)
router.post('/comment',CommentOnPin);
router.get('/delete_comment/:cmt_id',DelComment) // cmt is comment id

module.exports=router;