const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middleware/authMiddleware');
const logoutController = require('../controllers/logoutController');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index',{ title: 'BeatSync' });
  });

// indexRoutes.js

router.get('/perfil', authMiddleware, (req, res) => {
  res.redirect('/login');
});

router.get('/perfil', function(req, res){
  res.render('perfil', { title: 'perfil' });
});


router.get('/playlist', function(req, res) {
  res.render('playlist', { title: 'Playlist' });
});

router.get('/treino', function(req, res) {
  res.render('treino', { title: 'Treino' });
});

router.get('/sobreNos', function(req, res){
  res.render('sobreNos', { title: 'Sobre Nos' });
});

router.get('/musculacao', function(req, res){
  res.render('musculacao', { title: 'Exercícios para Musculação' });
});

router.get('/funcional', function(req, res){
  res.render('funcional', { title: 'Exercícios para Funcional' });
});

router.get('/cardio', function(req, res){
  res.render('cardio', { title: 'Exercícios para Cárido' });
});

router.get('/cross', function(req, res){
  res.render('cross', { title: 'Exercícios para CrossFit' });
});

router.get('/logout', logoutController.logout);

router.get('/cadastro', cadastroController.renderCadastroForm);
router.get('/login', loginController.renderLoginForm);
router.post('/login', loginController.userLogin);

module.exports = router;