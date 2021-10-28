var express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts');
const adminUserCheck = require('../middlewares/adminUserCheck');

const {products, createForm, create, productsList, detail, editForm, edit, cart, destroy} = require('../controllers/productsController');

/* /products */
router
.get('/', products)
.get('/create', adminUserCheck, createForm)
.post('/create', upload.array('image'), create)
.get('/productsList', productsList)
.get('/detail/:id', detail)
.get('/edit/:id', adminUserCheck, editForm)
.put('/edit/:id', upload.array('image'), edit)
.get('/cart', cart)
.delete('/delete/:id', destroy)

module.exports = router;
