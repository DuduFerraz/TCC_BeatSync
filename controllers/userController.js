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

    getUserById: (req, res) => {
        const userId = req.params.id;

        User.findById(userId, (err, user) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.render('users/perfil', { user });
        });
    },

    getAllUsers: (req, res) => {
        User.getAll((err, users) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('users/index', { users });
        });
    },

    renderCadastroForm: (req, res) => {
        res.render('cadastro');
    },

    renderLoginForm: (req, res) => {
        res.render('login');
    },

    renderEditForm: (req, res) => {
        const userId = req.params.id;

        User.findById(userId, (err, user) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.render('users/edit', { user });
        });
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

    updateUser: (req, res) => {
        const userId = req.params.id;
        const updatedUser = {
            nome: req.body.nome,
            email: req.body.email,
            dataNasc: req.body.dataNasc,
            genero: req.body.genero,
            senha: req.body.senha,
        };

        User.update(userId, updatedUser, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/users/perfil');
        });
    },

    deleteUser: (req, res) => {
        const userId = req.params.id;

        User.delete(userId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/');
        });
    },
};

module.exports = userController;
