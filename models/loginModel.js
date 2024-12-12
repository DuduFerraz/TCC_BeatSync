const db = require('../config/db');

const User = {
    login: (usuarios, callback) => {
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(query, [usuarios.email], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, false);
            }

            const dbUser = results[0];
            callback(null, dbUser); // Retorna o usuário encontrado no banco de dados
        });
    },
};

module.exports = User; // Certifique-se de exportar corretamente
