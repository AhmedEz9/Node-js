// media.js in models folder
const db = require('../db.js'); 

function getAllMedia() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM media', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAllMedia,
};
