const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index',{ title: 'BeatSync' });
  });

router.get('/perfil', function(req, res){
  res.render('perfil', { title: 'Perfil' });
});

router.get('/playlist', function(req, res){
  res.render('playlist', { title: 'Playlist' });
});

router.get('/treino', function(req, res){
  res.render('treino', { title: 'Treino' });
});

router.get('/sobreNos', function(req, res){
  res.render('sobreNos', { title: 'Sobre Nos' });
});

router.get('/cadastro', cadastroController.renderCadastroForm);
router.get('/login', loginController.renderLoginForm);

module.exports = router;