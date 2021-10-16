var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

const {registro, login} = require('../controllers/usersController')

/* /users */
router.get('/registro', registro);
router.get('/login', usersController.login, login);
router.post('/login', [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe contener al menos 8 carácteres.')
], usersController.processLogin);

module.exports = router;
