const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/treino', userController.renderTreino);
router.get('/perfil', userController.renderPerfil);
router.get('/playlist', userController.renderPlaylist);
router.get('/', userController.getAllUsers);
router.post('/cadastro', userController.userCadastro);
router.post('/login', userController.userLogin);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);



module.exports = router;