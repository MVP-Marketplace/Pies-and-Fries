const router = require('express').Router();
const comments = require('../../controllers/comments');

router.post('/feedback', comments.createFeedbackComment);
router.get('/feedback/get', comments.getFeedBackComments);
