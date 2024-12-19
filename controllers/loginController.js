const User = require('../models/loginModel');
const bcrypt = require('bcrypt');

const loginController = {
    userLogin: (req, res) => {
        const { email, senha } = req.body;

        User.login({ email, senha }, async (err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }

            if (!usuarios) {
                return res.status(401).json({ message: 'Usuário não encontrado!' });
            }
            
            req.session.userId = usuarios.id;
            req.session.userName = usuarios.nome;
            req.session.userEmail = usuarios.email;
            req.flash('success_msg', 'Você está logado!');

            res.redirect('/users/perfil');
        });
    },

    renderLoginForm: (req, res) => {
        res.render('login');
    },
};

module.exports = loginController;
