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
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(query, [user.email], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, false);
            }

            const dbUser = results[0];
            if (user.senha === dbUser.senha) {
                callback(null, dbUser);
            } else {
                callback(null, false);
            }
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByUsername: (nome, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ?';
        db.query(query, [nome], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, user, callback) => {
        const query = 'UPDATE usuarios SET nome = ?, email = ?, dataNasc = ?, genero = ?, senha = ?, WHERE id = ?';
        db.query(query, [user.nome, user.email, user.dataNasc, user.genero, user.senha, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM usuarios';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = User;
