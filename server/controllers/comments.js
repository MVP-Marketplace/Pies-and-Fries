const Comments = require('../db/models/comment');

exports.createFeedbackComment = async (req, res) => {
  const newCommentPost = req.body;
  const newComment = new Order(newOrderPost);
  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getFeedBackComments = async (req, res) => {
  try {
    const allComments = await Order.find();
    res.json(allComments);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
