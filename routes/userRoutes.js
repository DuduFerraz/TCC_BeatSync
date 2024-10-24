const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const treinoController = require('../controllers/treinoController');
const perfilController = require('../controllers/perfilController');
const router = express.Router();

router.get('/exercicio', treinoController.renderExercicio);
router.post('/exercicio', treinoController.userExercicio);
router.get('/perfil', perfilController.renderPerfil);
router.get('/playlist', cadastroController.renderPlaylist);
router.post('/cadastro', cadastroController.userCadastro);
router.post('/login', loginController.userLogin);

module.exports = router;