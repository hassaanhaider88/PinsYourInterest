var jwt = require('jsonwebtoken');

const findUser=(req,res)=>{
     var {firstName,lastName,aboutMe,websiteUri,username } = req.body; 
      const token = req.cookies.get('token');// Correct way to get the token
      if (!token) return res.redirect('/user/login'); // Redirect if token is not present
      var User = jwt.verify(token, process.env.JWT_SECT);
      return User;
}

module.exports=findUser;