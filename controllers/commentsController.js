const commentsModel = require('../models/comments.js');

exports.addNewComment = async (req, res) => {
    try {
        const { mediaId, userId, commentText } = req.body;
        await commentsModel.addComment(mediaId, userId, commentText);
        res.status(201).send('Comment added');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.removeComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        await commentsModel.deleteComment(commentId);
        res.status(200).send('Comment removed');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
