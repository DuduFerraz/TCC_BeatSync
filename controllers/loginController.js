const User = require('../models/loginModel');

const loginController = {
    userLogin: (req, res) => {
        const { email, senha } = req.body;

        console.log(`Tentativa de login com email: ${email}`); // Log do email fornecido

        User.login({ email, senha }, (err, usuario) => {
            if (err) {
                console.error('Erro na consulta ao banco de dados:', err);
                req.flash('error_msg', 'Erro no servidor.');
                return res.redirect('/login');
            }

            if (!usuario) {
                console.log('Usuário não encontrado ou senha incorreta.');
                req.flash('error_msg', 'Credenciais inválidas.');
                return res.redirect('/login');
            }

            console.log(`Usuário autenticado: ID = ${usuario.id}, Email = ${usuario.email}`);
            req.session.userId = usuario.id;
            req.session.userEmail = usuario.email;
            req.flash('success_msg', 'Login realizado com sucesso!');
            res.redirect('/users/perfil');
        });
    },

    renderLoginForm: (req, res) => {
        res.render('login');
    },
};

module.exports = loginController;
