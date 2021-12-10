var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const upload = require('../middlewares/multerUsers')
const userLoginCheck = require('../middlewares/userLoginCheck');
const loggedUser = require('../middlewares/loggedUser');
const profileValidator = require('../validations/profileValidator');

const {registro, processRegistro, login, processLogin, profile, profileEdit, profileUpdate, logout} = require('../controllers/usersController')

/* /users */
router
    .get('/registro', loggedUser, registro)
    .post('/registro', upload.single('image'), registerValidator, processRegistro)
    .get('/login', loggedUser, login)
    .post('/login',loginValidator,processLogin)    
    .get('/profile', userLoginCheck, profile)
    .get('/edit', userLoginCheck, profileEdit)
    .put('/edit', profileValidator, profileUpdate)
    .get('/logout', logout)

module.exports = router;

