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

module.exports = router;