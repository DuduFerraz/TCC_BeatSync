const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const checkAuth = require('../middleware/authMiddleware'); // Middleware de autenticação
const router = express.Router();

router.get('/treino', checkAuth, cadastroController.renderTreino);
router.get('/perfil', checkAuth, cadastroController.renderPerfil);
router.get('/playlist', checkAuth, cadastroController.renderPlaylist);


router.post('/cadastro', cadastroController.userCadastro);
router.post('/login', loginController.userLogin);

console.log(cadastroController); // Verifique as funções disponíveis
console.log(loginController);   // Faça o mesmo para outros controllers
console.log(checkAuth); 

module.exports = router;
