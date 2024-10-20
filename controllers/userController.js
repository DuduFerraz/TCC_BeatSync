const User = require('../models/userModel');

const userController = {
    userCadastro: (req, res) => {
            const newUser = {
                nome: req.body.nome,
                email: req.body.email,
                dataNasc: req.body.dataNasc,
                genero: req.body.genero,
                senha: req.body.senha,
            };
            User.Cadastro(newUser, (err, userId) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                res.redirect('/users/treino');
            });
    },

    userLogin: (req, res) => {
        const { email, senha } = req.body;

        User.login({ email, senha }, async (err, user) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!user) {
                return res.status(401).json({ message: 'Seu e-mail ou senha estão incorretos!' });
            }

            const isValidPassword = (senha, user.senha);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'E-mail ou senha invalidos!' });
            }

            res.redirect('/users/treino');
        });
    },

    userTreino: (req, res) => {
        const newTreino = {
            tipo: req.body.tipo,
        }
        User.treino(newTreino, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/users/playlist');
        });
    },

    renderCadastroForm: (req, res) => {
        res.render('cadastro');
    },

    renderLoginForm: (req, res) => {
        res.render('login');
    },

    renderTreino: (req, res) => {
        res.render('users/treino');
    },

    renderPlaylist: (req, res) => {
        res.render('users/playlist');
    },

    renderPerfil: (req, res) => {
        res.render('users/perfil');
    },
}

module.exports = userController;
