const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const checkAuth = require('../middleware/authMiddleware');  
const router = express.Router();

router.get('/treino', cadastroController.renderTreino);
router.get('/perfil', cadastroController.renderPerfil);
router.get('/playlist', cadastroController.renderPlaylist);
router.post('/cadastro', cadastroController.userCadastro);
router.post('/login', loginController.userLogin);

router.post('/login', loginController.userLogin);

// Rota de perfil com middleware de autenticação
router.get('/perfil', checkAuth, (req, res) => {
    res.render('perfil', { user: req.session.user });
});

module.exports = router;