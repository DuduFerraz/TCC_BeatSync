const User = require('../models/cadastroModel');

const perfilController = {
    renderPerfil: (req, res) => {
        res.render('users/perfil');
    },
};

module.exports = perfilController;