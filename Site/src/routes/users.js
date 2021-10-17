var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/multerUsers')

const {registro, processRegistro, login} = require('../controllers/usersController')

/* /users */
<<<<<<< HEAD
router.get('/registro', registro);
router.get('/login', usersController.login, login);
router.post('/login', [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe contener al menos 8 carácteres.')
], usersController.processLogin);
=======
router
    .get('/registro', registro)
    .post('/registro', upload.single('image'), registerValidator, processRegistro)
    .get('/login', login)
>>>>>>> b9229b6e2e0d77a252585075f7d60c51dd20d8a0

module.exports = router;



// .get('/register',notEntry, register)
//     .post('/register',registerValidator, processRegister)
//     .get('/login',notEntry, login)
//     .post('/login',loginValidator, processLogin)
//     .get('/logout',logout)
//     .get('/profile',userLoginCheck, profile)
//     .post('/profile',upload.single('avatar'),profileValidator, update)