const db = require('../config/db');

const User = {
    login: (user, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [user.email], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, false);
            }

            const dbUser = results[0];
            callback(null, dbUser);
        });
    },
};

module.exports = User;