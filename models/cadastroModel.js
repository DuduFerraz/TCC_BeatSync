const db = require('../config/db');

const User = {
    Cadastro: (usuarios, callback) => {
        console.log('cadastrando úsuario:'+ usuarios.email)
        const checkEmailQuery = 'SELECT email FROM usuarios WHERE email = ?';
        db.query(checkEmailQuery, [usuarios.email], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length > 0) {
                return callback(new Error('E-mail já cadastrado.'));
            }
            const query = 'INSERT INTO usuarios (nome, email, data_nasc, genero, senha) VALUES (?,?,?,?,?)'
            db.query(query, [usuarios.nome, usuarios.email, usuarios.data_nasc, usuarios.genero, usuarios.senha], (err, results) => {
                if (err) {
                    return callback(err);
                } if (results.length === 0) {
                    return callback(null, false)
                }
                callback(null, results[0]);
            })
        });
    },

    perfil: (usuarios, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ? AND email = ? AND data_nasc = ? AND genero = ?';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.data_nasc, usuarios.genero], (err, results) => {
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