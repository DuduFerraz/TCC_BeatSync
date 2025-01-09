const User = require('../models/cadastroModel');

const cadastroController = {
    // Renderiza o formulário de cadastro
    renderCadastroForm: (req, res) => {
        res.render('cadastro', { error: null, data: {} }); // Define erro e dados iniciais como nulos/vazios
    },

    // Cadastra um novo usuário
    userCadastro: (req, res) => {
        const newUser = {
            nome: req.body.nome,
            email: req.body.email,
            data_nasc: req.body.dataNasc,
            genero: req.body.genero,
            senha: req.body.senha, // A senha será criptografada no cadastroModel
        };

        User.Cadastro(newUser, (err, userId) => {
            if (err) {
                if (err.message === 'E-mail já cadastrado.') {
                    return res.status(400).render('cadastro', {
                        error: 'E-mail já registrado. Tente outro.',
                        data: newUser, // Passa os dados preenchidos para não perder o que o usuário digitou
                    });
                }
                return res.status(500).render('cadastro', {
                    error: 'Erro ao cadastrar. Tente novamente mais tarde.',
                    data: newUser,
                });
            }

            // Redireciona para a página de login após o cadastro bem-sucedido
            res.redirect('/login');
        });
    },

    // Renderiza a página de treino
    renderTreino: (req, res) => {
        res.render('users/treino', { title: 'Treino' });
    },

    // Renderiza a página de perfil do usuário
    renderPerfil: (req, res) => {
        res.render('users/perfil', {
            title: 'Perfil',
            userNome: req.session.userNome,
            userEmail: req.session.userEmail,
            userData_nasc: req.session.userData_nasc,
            userGenero: req.session.userGenero,
        });
    },

    // Renderiza a página de playlist
    renderPlaylist: (req, res) => {
        res.render('users/playlist', { title: 'Playlist' });
    },
};

module.exports = cadastroController;
