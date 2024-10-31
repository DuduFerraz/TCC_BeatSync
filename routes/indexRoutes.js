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

router.get('/eletro_hiphop_metal', function(req, res){
  res.render('eletro_hiphop_metal');
});

router.get('/funk_phonk_pop', function(req, res){
  res.render('funk_phonk_pop');
});

router.get('/hiphop_metal_pop', function(req, res){
  res.render('hiphop_metal_pop');
});

router.get('/phonk_metal_pop', function(req, res){
  res.render('phonk_metal_pop');
});

router.get('/cadastro', cadastroController.renderCadastroForm);
router.get('/login', loginController.renderLoginForm);

module.exports = router;