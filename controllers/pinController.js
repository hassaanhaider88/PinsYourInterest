const { formatDistanceToNow } = require('date-fns');
var timeSince = require('../utils/TimeCal.js')
var PinsData = require('../public/Data/Pins');
var jwt = require('jsonwebtoken');
 var userModule = require('../models/user_model.js');
 var PinModel = require("../models/Pin_model.js");
 var CommentModel = require('../models/Comment_model.js')
 var is_Follow = require('../middlewares/IsFollow.js');
 
 var IsFollow;
 var ShowSinglePin = async (req,res)=>{
  var IsHome = false;
  var IsCreate =  false;
  var pinId=req.params.pin_id;
  var token = req.cookies.get('token');// Correct way to get the token
    if (!token) return res.redirect('/user/login'); // Redirect if token is not presen
    var User = jwt.verify(token, process.env.JWT_SECT);
    var UserWhichLoggIn = await userModule.findOne({ email: User.email });
    var SltPin = await PinModel.find({_id: pinId }).populate('createdBy').populate({
      path: 'comments',
      populate: { path: 'username', model: 'User' }  // Populate username in comments
    });
    var CreatedBy= SltPin[0].createdBy;
    var Comments = SltPin[0].comments;
    IsFollow = CreatedBy.followers.includes(UserWhichLoggIn._id);
    var newCommentsTime = Comments.map((comment)=>{
      const dateTimeString = comment.createdAt;   // the time of comment 
      const date = new Date(dateTimeString);
      const dateCur = new Date();  // the current time when the user views the comment
      const milliseconds = date.getTime();
      const milliseconds2 = dateCur.getTime();
      const Diff = milliseconds2 - milliseconds;
      function timeSince(diff) {
          const seconds = Math.floor(diff / 1000);
          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);
          const months = Math.floor(days / 30); // Approximation
          const years = Math.floor(days / 365); // Approximation
      
          if (years > 0) return `${years}y`;
          if (months > 0) return `${months}mo`;
          if (days > 0) return `${days}d`;
          if (hours > 0) return `${hours}h`;
          if (minutes > 0) return `${minutes}m`;
          return `${seconds}s`;
      }
      return timeSince(Diff);
    });
var IsAuth;  // means which pin show is the login user is created this and show his own pin
    if(CreatedBy._id.toString() === UserWhichLoggIn._id.toString()){
      IsAuth = true;
    }else{
      IsAuth = false;
    }

    

    res.render('Pin',{ SltPin ,IsAuth ,UserWhichLoggIn,pinId,Comments, newCommentsTime,IsHome,IsCreate ,CreatedBy,IsFollow});
}
var ShowCreatePin=async (req,res)=>{
  var IsHome = false;
  var IsCreate =  true;
  var token = req.cookies.get('token');// Correct way to get the token
    if (!token) return res.redirect('/user/login'); // Redirect if token is not present
    var User = jwt.verify(token, process.env.JWT_SECT);
    var UserWhichLoggIn = await userModule.findOne({ email: User.email }).lean().populate('createdpost'); 
    var CreatedPost = UserWhichLoggIn.createdpost;
  res.render('CreatePin',{ UserWhichLoggIn ,CreatedPost,IsCreate,IsHome});

}
// 

var CreatePin= async (req,res)=>{
  var token = req.cookies.get('token');// Correct way to get the token
  if (!token) return res.redirect('/user/login'); // Redirect if token is not present
  var User = jwt.verify(token, process.env.JWT_SECT);
  var UserWhichLoggIn = await userModule.findOne({ email: User.email });
  try {
    var { title, Desc, link, borad, ImgHeight } = req.body;
    var imageUrl = req.file.path;
    var Pin = await PinModel.create({
      Title:title,
      description: Desc,
      WebsiteLink:link,
      board: borad,
      imageUrl:imageUrl,
      ImgHeight:ImgHeight,
      createdBy:  UserWhichLoggIn._id
    });
    UserWhichLoggIn.createdpost.unshift(Pin._id);
    await UserWhichLoggIn.save();
    res.redirect('/'); // Redirect or respond as needed
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}
// UserWhichFollowed jo follow ho raha hai       UserWhichFollow jo follow kr raha hai  
var FollowUser = async (req, res) => {
  try {
    var token = req.cookies.get('token'); // Adjust as needed
    if (!token) return res.redirect('/user/login'); // Redirect if token is not present

    // Verify the JWT
    var User = jwt.verify(token, process.env.JWT_SECT);
    
    // Fetch user details
    var UserWhichFollow = await userModule.findOne({ email: User.email });
    var UserWhichFollowed = await userModule.findOne({ _id: req.params.userid });
    
    if (!UserWhichFollow || !UserWhichFollowed) {
      console.error('User not found');
      return res.redirect('/user/login');
    }

    var FollowCheack = UserWhichFollowed.followers.includes(UserWhichFollow._id);

    if (FollowCheack) {
      var IndexOfFollowed = UserWhichFollow.following.indexOf(UserWhichFollowed._id);
      var IndexOfFollow = UserWhichFollowed.followers.indexOf(UserWhichFollow._id)
      UserWhichFollowed.followers.splice(IndexOfFollow,1);
      UserWhichFollow.following.splice(IndexOfFollowed,1);
      await UserWhichFollowed.save();
      await UserWhichFollow.save();
      IsFollow = false;
    } else {
      // Follow
      UserWhichFollowed.followers.push(UserWhichFollow._id);
      UserWhichFollow.following.push(UserWhichFollowed._id);
      await UserWhichFollowed.save();
      await UserWhichFollow.save();
      IsFollow = true;
    }

   
    // Redirect
    res.redirect(`/pin/${req.query.pinId}`);
  } catch (error) {
    console.error('Error in FollowUser:', error);
    res.status(500).send('Internal Server Error');
  }
};


var CommentOnPin = async (req,res) =>{
   var token = req.cookies.get('token');
   var User = jwt.verify(token, process.env.JWT_SECT);
   var UserWhichCom = await userModule.findOne({ email : User.email });
   var pinId = req.query.pinId;
   var ComPin = await PinModel.findOne({ _id : pinId });
   var Comment = await CommentModel.create({
    userMessage:req.body.Comment,
    username : UserWhichCom
   });
   ComPin.comments.unshift(Comment._id);
   await ComPin.save();
  //  console.log(ComPin);
   const timeSincePosted = formatDistanceToNow(new Date(Comment.createdAt), { addSuffix: true });
  //  console.log(`Comment posted: ${timeSincePosted}`);
  res.redirect(`/pin/${pinId}`)
}


const DelComment = (req,res)=>{
     res.send(`delete ${req.params.cmt_id} comment`)
}

module.exports = {
  ShowSinglePin,
  CreatePin,
  ShowCreatePin,
  FollowUser,
  CommentOnPin,
  DelComment
}