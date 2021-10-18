var express = require('express');
var router = express.Router();

const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/multerUsers')
const userLoginCheck = require('../middlewares/userLoginCheck');
const loggedUser = require('../middlewares/loggedUser')

const {registro, processRegistro, login, profile} = require('../controllers/usersController')

/* /users */
router
    .get('/registro', registro)
    .post('/registro', upload.single('image'), registerValidator, processRegistro)
    .get('/login', loggedUser, login)
    .get('/profile', userLoginCheck, profile)

module.exports = router;



// .get('/register',notEntry, register)
//     .post('/register',registerValidator, processRegister)
//     .get('/login',notEntry, login)
//     .post('/login',loginValidator, processLogin)
//     .get('/logout',logout)
//     .get('/profile',userLoginCheck, profile)
//     .post('/profile',upload.single('avatar'),profileValidator, update)