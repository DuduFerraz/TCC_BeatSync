const Music = require('../models/musicModel');

const MusicController = {
    createMusic: (req, res) => {
        const newMusic = {
            nome: req.body.nome,
            gender: req.body.gender,
            artist: req.body.artist,
            album: req.body.album,
            link_url: req.body.link
        };

        Music.create(newMusic, (err, MusicId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/treino');
        });
    },

    getMusicById: (req, res) => {
        const MusicId = req.params.id;

        Music.findById(MusicId, (err, music) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!music) {
                return res.status(404).json({ message: 'music not found' });
            }
            res.render('Musics/show', { music });
        });
    },

    getAllMusics: (req, res) => {
        Music.getAll((err, Musics) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('Musics/index', { Musics });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('Musics/create');
    },

    renderEditForm: (req, res) => {
        const MusicId = req.params.id;

        Music.findById(MusicId, (err, music) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!music) {
                return res.status(404).json({ message: 'music not found' });
            }
            res.render('Musics/edit', { music });
        });
    },

    updateMusic: (req, res) => {
        const MusicId = req.params.id;
        const updatedMusic = {
            nome: req.body.nome,
            gender: req.body.gender,
            artist: req.body.artist,
            album: req.body.album,
            link_url: req.body.link
        };

        Music.update(MusicId, updatedMusic, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/perfil');
        });
    },

    deleteMusic: (req, res) => {
        const MusicId = req.params.id;

        Music.delete(MusicId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/');
        });
    },
};

module.exports = MusicController;
