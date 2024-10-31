const express = require('express');
const router = express.Router();

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

router.get('/plays/play1', function(req, res){
    res.render('play1');
});
  
router.get('/plays/play2', function(req, res){
    res.render('play2');
});
  
router.get('/plays/play3', function(req, res){
    res.render('play3');
});
 

module.exports = router;