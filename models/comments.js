const db = require('../db.js');

function addComment(mediaId, userId, commentText) {
    return db.promise().execute(
        'INSERT INTO comments (media_id, user_id, comment_text) VALUES (?, ?, ?)',
        [mediaId, userId, commentText]
    );
}

function deleteComment(commentId) {
    return db.promise().execute(
        'DELETE FROM comments WHERE comment_id = ?',
        [commentId]
    );
}

module.exports = { addComment, deleteComment };
