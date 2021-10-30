var express = require('express');
var router = express.Router();

const adminUserCheck = require('../middlewares/adminUserCheck');

const {index, adminProducts, adminUsers} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/adminProducts', adminUserCheck, adminProducts);
router.get('/adminUsers', adminUserCheck, adminUsers);


module.exports = router;
