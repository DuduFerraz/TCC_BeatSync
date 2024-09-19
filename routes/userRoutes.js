const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/cadastro', userController.userCadastro);
router.post('/login', userController.userLogin)
router.get('/:id', userController.getUserById);
router.get('/edit', userController.renderEditForm);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;