const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController.js');

router.post('/', commentsController.addNewComment);
router.delete('/:commentId', commentsController.removeComment);

module.exports = router;
