const mongoose = require('mongoose');
const { stringify } = require('node:querystring');

const commentSchema = new mongoose.Schema({
  user_id: { type: String, default: null },
  customer_name: { type: String, default: null },
  satisfaction_level: { type: Array, default: null },
  feedback_comments: { type: stringify, default: null },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const comments = mongoose.model('comment', commentSchema);

module.exports = comment;
