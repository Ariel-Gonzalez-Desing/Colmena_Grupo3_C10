var express = require('express');
var router = express.Router();

const adminUserCheck = require('../middlewares/adminUserCheck');

const {index, adminProducts, adminUsers, rolEdit, deleteUser} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/adminProducts', adminUserCheck, adminProducts);
router.get('/adminUsers', adminUserCheck, adminUsers);
router.put('/adminUsers/:id', rolEdit);
router.delete('/delete/:id', deleteUser);


module.exports = router;
