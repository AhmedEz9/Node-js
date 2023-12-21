const likesModel = require('../models/likes.js');

exports.addNewLike = async (req, res) => {
    try {
        const { mediaId, userId } = req.body;
        await likesModel.addLike(mediaId, userId);
        res.status(201).send('Like added');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.removeLike = async (req, res) => {
    try {
        const { likeId } = req.params;
        await likesModel.deleteLike(likeId);
        res.status(200).send('Like removed');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
