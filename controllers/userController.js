var jwt = require('jsonwebtoken');
var userModule = require('../models/user_model.js');
var bcrypt = require('bcrypt');
var IsFollow;

var SignInUser = async (req, res, next) => {
  try {
    var { user_name, email, password } = req.body;
       var isUser = await userModule.findOne({email:email})
        if(isUser) return res.redirect('/user/login')

        var hashPas = await bcrypt.hash(password, 10);
        var UserProfile = user_name.charAt(0).toUpperCase();
// create token here 
    var token = jwt.sign(
      { user_name, email },
      process.env.JWT_SECT,
      { expiresIn: '15d' }
    );

    // Create the user and store it in DB
    var user = await userModule.create({
      username: user_name,
      email,
      password: hashPas,
      profilePicture: `<div class="ProfileContainer">
                    <p class="dynamicUser">${UserProfile}</p>
                    </div>`,
      profileImgUri:'',              
      token
    });

    // Set the token in a cookie
    req.cookies.set('token', token, { 
      httpOnly: true, 
      maxAge: (15 * 24 * 60 * 60 * 1000) 
    });
    req.user = user;
    res.redirect('/');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

var LoginUser = async (req, res) => {
  try {
      var { email, password } = req.body;
      var isUser = await userModule.findOne({ email: email });
      if (!isUser) {
          return res.redirect('/user/signin');
      }
      var result = await bcrypt.compare(password, isUser.password);
      if (!result) {
          return res.redirect('/user/signin');
      }
      var token = jwt.sign({ user_name: isUser.user_name, email }, process.env.JWT_SECT, { expiresIn: '15d' });
      res.cookie('token', token, { httpOnly: true, maxAge: (15 * 24 * 60 * 60 * 1000)});
      res.redirect('/');
  } catch (error) {
      console.error('Login error:', error);
      res.redirect('/user/signin');
  }
};




var showMyProfile= async (req,res)=>{
  var UserProfile;
  var IsAuth;  
  var IsFollow;    
  var IsHome = false;
  var IsCreate =  false;       // means ke jo user profile dekh raha hai uski apni profile hai  
  var LogInUserId =  req.params.user_id;
  var token = req.cookies.get('token');
  var User = jwt.verify(token, process.env.JWT_SECT);
        var UserWhichLoggIn = await userModule.findOne({ email: User.email }).lean().populate('createdpost savedpost'); 
        var clickUserProfile = await userModule.findOne({ _id : LogInUserId }).lean().populate('createdpost savedpost');
        if(LogInUserId.toString() === UserWhichLoggIn._id.toString()){
          UserProfile = UserWhichLoggIn;
        IsFollow = clickUserProfile.followers.map(follower => follower.toString()).includes(UserWhichLoggIn._id.toString());
          IsAuth = true;
        }else{
          UserProfile = clickUserProfile;
          if(clickUserProfile && clickUserProfile.followers !== null){
        IsFollow = clickUserProfile.followers.map(follower => follower.toString()).includes(UserWhichLoggIn._id.toString());
          IsAuth = false;
        } else{
          res.send('user not found ')
        }
        }        
        var CreatedPost = UserProfile.createdpost;
        var SavedPost = UserProfile.savedpost;
        // var SavedPost = UserProfile.Saved
        var UserName = UserProfile.username.split(' ').join('').toLowerCase();
  res.render('Profile',{ UserWhichLoggIn,IsAuth,UserProfile,SavedPost ,UserName,IsFollow,CreatedPost,IsHome,IsCreate});
}

var savePosts=async (req,res)=>{
  var token = req.cookies.get('token');
  var User = jwt.verify(token, process.env.JWT_SECT);
        var UserWhichSP = await userModule.findOne({ email: User.email }); 
        UserWhichSP.savedpost.push(req.params.postid);
         await UserWhichSP.save();
     res.redirect('/');
}

var ProfileChange = async (req, res) => {
    try {
      var token = req.cookies.get('token');// Correct way to get the token
      if (!token) return res.redirect('/user/login'); // Redirect if token is not present
  
      var User = jwt.verify(token, process.env.JWT_SECT);
      var UserWhichCDP = await userModule.findOne({ email: User.email });
  
      if (!UserWhichCDP) return res.redirect('/user/login'); // Redirect if user not found
  
      if (!req.file) return res.redirect(`/user/${UserWhichCDP._id}`);
  
      var DBPath = req.file.path;
  
      await userModule.findOneAndUpdate(
        { email: User.email },
        { $set: { profileImgUri: DBPath } }
      );
      res.redirect(`/user/${UserWhichCDP._id}`);
    } catch (error) {
      console.error('Error updating profile picture:', error);
      res.status(500).json({ error: 'Failed to update profile picture' });
    }
};

var EditUserInfo= async (req,res)=>{
  var IsHome = false;
  var IsCreate =  false;
  var token = req.cookies.get('token');// Correct way to get the token
      if (!token) return res.redirect('/user/login'); // Redirect if token is not present
      var User = jwt.verify(token, process.env.JWT_SECT);
      var UserWhichLoggIn = await userModule.findOne({ email: User.email }); //change Profile info
  res.render('EditUser',{ UserWhichLoggIn,IsHome,IsCreate });
}

var SaveProfileChanges= async (req,res)=>{
  var {firstName,lastName,aboutMe,websiteUri,username } = req.body; 
  var token = req.cookies.get('token');// Correct way to get the token
      if (!token) return res.redirect('/user/login'); // Redirect if token is not present
      var User = jwt.verify(token, process.env.JWT_SECT);
      var UserWhichCDP = 
      await userModule.findOneAndUpdate(
        { email: User.email },
        { $set: { firstName,lastName,aboutMe,websiteUri,username } },{ new: true } 
      );
  
      res.redirect(`/user/${UserWhichCDP._id}`)
  // res.json({mes :  UserWhichCDP})
}


var FollowUser= async (req,res)=>{
  try {
    var token = req.cookies.get('token'); // Adjust as needed
    if (!token) return res.redirect('/user/login'); // Redirect if token is not present

    // Verify the JWT
    var User = jwt.verify(token, process.env.JWT_SECT);
    
    // Fetch user details
    var UserWhichFollow = await userModule.findOne({ email: User.email });
    var UserWhichFollowed = await userModule.findOne({ _id: req.params.user_id });
    
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
    res.redirect(`/user/${req.params.user_id}`);
  } catch (error) {
    console.error('Error in FollowUser:', error);
    res.status(500).send('Internal Server Error');
  }
}

var LogOut=(req,res)=>{
  res.cookie('token',"");
  res.redirect('/')
}

module.exports = {
  SignInUser,
  LoginUser,
  LogOut,
  showMyProfile,
  savePosts,
  ProfileChange,
  EditUserInfo,
  SaveProfileChanges,
  FollowUser
}
