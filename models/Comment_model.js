const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userMessage: {
    type: String,
    required: true
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);
