const db = require('../config/db');

const Music = {
    create: (music, callback) => {
        const query = 'INSERT INTO musics (nome, email, dataNasc, gender, senha) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [music.nome, music.album, music.artist, music.gender, music.link_url], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM musics WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByMusicname: (nome, callback) => {
        const query = 'SELECT * FROM musics WHERE nome = ?';
        db.query(query, [nome], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, music, callback) => {
        const query = 'UPDATE musics SET nome = ?, album = ?, artist = ?, gender = ?, link_url = ?, WHERE id = ?';
        db.query(query, [music.nome, music.album, music.artist, music.gender, music.link_url, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM musics WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM musics';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = Music;
