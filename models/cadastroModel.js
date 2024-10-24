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
};

module.exports = User;