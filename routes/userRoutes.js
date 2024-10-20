const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/treino', userController.renderTreino);
router.get('/perfil', userController.renderPerfil);
router.get('/playlist', userController.renderPlaylist);
router.post('/cadastro', userController.userCadastro);
router.post('/login', userController.userLogin);

module.exports = router;