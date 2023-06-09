var express = require('express');
var router = express.Router();


router.get('/registrer', (req, res)=>{
    res.render('registrer');
}); 

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/enregistrement', (req, res)=>{
    res.render('enregistrement')
});

router.get('/famas', (req, res)=>{
    res.render('enregistrementfamas')
});

router.get('/contact', (req, res)=>{
    res.render('contact');
});


module.exports = router;

