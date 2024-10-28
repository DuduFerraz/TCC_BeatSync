const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/treino', cadastroController.rendertreino);
router.get('/perfil', cadastroController.renderPerfil);
router.get('/playlist', cadastroController.renderPlaylist);
router.post('/cadastro', cadastroController.userCadastro);
router.post('/login', loginController.userLogin);

module.exports = router;