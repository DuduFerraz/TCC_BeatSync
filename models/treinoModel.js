const db = require('../config/db');

const User = {
    Exercicio: (Exercicio, callback) => {
        const query = 'INSERT INTO treino (tipo, id_exercicio) VALUES (?, ?)';
        db.query(query, [Exercicio.tipo, Exercicio.id_exercicio], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },
    
};

module.exports = User;
