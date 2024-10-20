const db = require('../config/db');

const User = {
    Cadastro: (user, callback) => {
        const query = 'INSERT INTO users (nome, email, dataNasc, genero, senha) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [user.nome, user.email, user.dataNasc, user.genero, user.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

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
