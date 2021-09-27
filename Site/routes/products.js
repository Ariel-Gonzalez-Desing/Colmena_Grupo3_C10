var express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')

const {products, createForm, create, detalle, editForm, edit, carrito, destroy} = require('../controllers/productsController');

/* /products */
router
.get('/', products)
.get('/create', createForm)
.post('/create', upload.array('image'), create)
.get('/detalle/:id', detalle)
.get('/edit/:id', editForm)
.put('/edit/:id', edit)
.get('/carrito', carrito)
.delete('/delete/:id', destroy)

module.exports = router;
