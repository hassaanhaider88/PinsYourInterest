const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
  Title: String,
  imageUrl: {
    type: String,
    required: true
  },

  ImgHeight:{
    type: String,
    required:true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  description: {
    type: String,
    trim: true

  },
  NumOfLikes: {
    type: Number,
    default:0
  },
  WebsiteLink: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Pin', PinSchema);
