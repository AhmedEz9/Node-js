const db = require('../db.js');

function addLike(mediaId, userId) {
    return db.promise().execute(
        'INSERT INTO likes (media_id, user_id) VALUES (?, ?)',
        [mediaId, userId]
    );
}

function deleteLike(likeId) {
    return db.promise().execute(
        'DELETE FROM likes WHERE like_id = ?',
        [likeId]
    );
}

module.exports = { addLike, deleteLike };
