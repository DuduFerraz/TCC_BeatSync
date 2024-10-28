const User = require('../models/cadastroModel');

const cadastroController = {
    userCadastro: (req, res) => {
            const newUser = {
                nome: req.body.nome,
                email: req.body.email,
                data_nasc: req.body.dataNasc,
                genero: req.body.genero,
                senha: req.body.senha,
            };
            User.Cadastro(newUser, (err, Usuariosid) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                res.redirect('/users/perfil');
            });
    },
    renderCadastroForm: (req, res) => {
        res.render('cadastro');
    },
    renderPlaylist: (req, res) => {
        res.render('users/playlist');
    },
    rendertreino: (req, res) => {
        res.render('users/treino');
    },
    renderPerfil: (req, res) => {
        res.render('users/perfil');
    },

};

module.exports = cadastroController;