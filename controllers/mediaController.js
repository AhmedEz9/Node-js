const mediaModel = require('../models/media');

function listAllMedia(req, res) {
    mediaModel.getAllMedia().then((mediaItems) => {
        res.json(mediaItems);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

module.exports = {
    listAllMedia,
};
