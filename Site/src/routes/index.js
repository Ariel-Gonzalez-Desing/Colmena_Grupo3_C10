var express = require('express');
var router = express.Router();

const adminUserCheck = require('../middlewares/adminUserCheck');

const {index, admin} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/admin', adminUserCheck, admin);


module.exports = router;
