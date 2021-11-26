var express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts');
const adminUserCheck = require('../middlewares/adminUserCheck');
const productValidator = require('../validations/productValidator');

const {createForm, create, productsList, detail, editForm, edit, carrito, destroy} = require('../controllers/productsController');


/* /products */
router
.get('/create', adminUserCheck, createForm)
.post('/create', upload.array('image'), productValidator, create)
.get('/productsList', productsList)
.get('/detail/:id', detail)
.get('/edit/:id', adminUserCheck, editForm)
.put('/edit/:id', upload.array('image'), productValidator, edit)
.get('/carrito', carrito)
.delete('/delete/:id', destroy)

module.exports = router;
