const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = {
    Cadastro: (usuarios, callback) => {
        const checkEmailQuery = 'SELECT email FROM usuarios WHERE email = ?';
        db.query(checkEmailQuery, [usuarios.email], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length > 0) {
                return callback(new Error('E-mail já cadastrado.'));
            }
        });
    },

    perfil: (usuarios, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ? AND email = ? AND dataNasc = ? AND genero = ?';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.dataNasc, usuarios.genero], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, false);
            }
            callback(null, results[0]);
        });
    },
};

module.exports = User;
