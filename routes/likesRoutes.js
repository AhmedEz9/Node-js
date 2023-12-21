const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');

router.post('/', likesController.addNewLike);
router.delete('/:likeId', likesController.removeLike);

module.exports = router;
