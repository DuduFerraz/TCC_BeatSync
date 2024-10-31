const db = require('../config/db');

const User = {
    Cadastro: (usuarios, callback) => {
        const query = 'INSERT INTO usuarios (nome, email, data_nasc, genero, senha) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.data_nasc, usuarios.genero, usuarios.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },
    perfil: (usuarios, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ? email = ? data_nasc = ? genero = ?';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.data_nasc, usuarios.genero], (err, results) => {
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