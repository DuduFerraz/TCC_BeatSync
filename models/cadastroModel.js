const db = require('../config/db');

const User = {
    Cadastro: (Usuarios, callback) => {
        const query = 'INSERT INTO Usuarios (nome, email, data_nasc, genero, senha) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [Usuarios.nome, Usuarios.email, Usuarios.data_nasc, Usuarios.genero, Usuarios.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },
    perfil: (usuario, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ? email = ? data_nasc = ? genero = ?';
        db.query(query, [usuario.nome, usuario.email, usuario.data_nasc, usuario.genero], (err, results) => {
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