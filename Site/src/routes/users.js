var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const upload = require('../middlewares/multerUsers')

const {registro, processRegistro, login, processLogin} = require('../controllers/usersController')

/* /users */
router
    .get('/registro', registro)
    .post('/registro', upload.single('image'), registerValidator, processRegistro)
    .get('/login', login)
    .post('/login',loginValidator,processLogin)

module.exports = router;



// .get('/register',notEntry, register)
//     .post('/register',registerValidator, processRegister)
//     .get('/login',notEntry, login)
//     .post('/login',loginValidator, processLogin)
//     .get('/logout',logout)
//     .get('/profile',userLoginCheck, profile)
//     .post('/profile',upload.single('avatar'),profileValidator, update)