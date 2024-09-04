const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  aboutMe : String,
  websiteUri : String,
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
  },
  profileImgUri: {
    type: String
  },
  savedpost:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'Pin'
    }
  ],
  createdpost:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'Pin'
    }
  ],
  token:{
    type: String,
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
