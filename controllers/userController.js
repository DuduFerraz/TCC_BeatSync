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
        const user = {
            email: req.body.email,
            senha: req.body.senha,
        };

        User.login(user, (err, userId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/users/treino')
        })
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
            res.render('users/show', { user });
        });
    },

    getAllUsers: (req, res) => {
        User.getAll((err, user) => {
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

    updateUser: (req, res) => {
        const userId = req.params.id;
        const updatedUser = {
            nome: req.body.nome,
            email: req.body.email,
            dataNasc: req.body.dataNasc,
            gender: req.body.gender,
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
