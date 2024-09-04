var jwt = require('jsonwebtoken')
var userModule= require('../models/user_model.js')

var IsFollow;
// var FollowCheack;
const is_Follow = async (req,res,next) =>{
  try {
    const token = req.cookies.get('token'); // Adjust as needed
    if (!token) return res.redirect('/user/login'); // Redirect if token is not present

    // Verify the JWT
    const User = jwt.verify(token, process.env.JWT_SECT);
    
    // Fetch user details
    const UserWhichFollow = await userModule.findOne({ email: User.email });
    const UserWhichFollowed = await userModule.findOne({ _id: req.params.userid });
    
    if (!UserWhichFollow || !UserWhichFollowed) {
      console.error('User not found');
      return res.redirect('/user/login');
    }

    const FollowCheack = UserWhichFollowed.followers.includes(UserWhichFollow._id);

    if (FollowCheack) {
      // Unfollow
      
      UserWhichFollowed.followers.pull(UserWhichFollow._id);
      UserWhichFollow.following.pull(UserWhichFollowed._id);
      await UserWhichFollowed.save();
      await UserWhichFollow.save();
      IsFollow = false;
      console.log('IsFollow value',IsFollow);
    } else {
      // Follow
      UserWhichFollowed.followers.push(UserWhichFollow._id);
      UserWhichFollow.following.push(UserWhichFollowed._id);
      await UserWhichFollowed.save();
      await UserWhichFollow.save();
      IsFollow = true;
      console.log('IsFollow value',IsFollow);
    }

    return IsFollow;
  } catch (error) {
    console.error('Error in FollowUser:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = is_Follow;