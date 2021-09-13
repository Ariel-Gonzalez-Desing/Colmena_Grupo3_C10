var express = require('express');
var router = express.Router();

const {registro, login} = require('../controllers/usersController')

/* /users */
router.get('/registro', registro);
router.get('/login', login);

module.exports = router;
