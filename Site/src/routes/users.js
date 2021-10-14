var express = require('express');
var router = express.Router();
const upload = require('../middlewares/multerUsers')

const {registro, processRegistro, login} = require('../controllers/usersController')

/* /users */
router
    .get('/registro', registro)
    .post('/registro', upload.single('image'), processRegistro)
    .get('/login', login)

module.exports = router;



// .get('/register',notEntry, register)
//     .post('/register',registerValidator, processRegister)
//     .get('/login',notEntry, login)
//     .post('/login',loginValidator, processLogin)
//     .get('/logout',logout)
//     .get('/profile',userLoginCheck, profile)
//     .post('/profile',upload.single('avatar'),profileValidator, update)