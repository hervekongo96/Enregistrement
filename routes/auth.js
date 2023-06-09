const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/registrer', authController.registrer);
router.post('/login', authController.login);
router.post('/enregistrement', authController.enregistrement);


 
module.exports = router;
