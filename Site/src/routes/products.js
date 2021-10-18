var express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts')

const {products, createForm, create, detail, editForm, edit, carrito, destroy} = require('../controllers/productsController');

/* /products */
router
.get('/', products)
.get('/create', createForm)
.post('/create', upload.array('image'), create)
.get('/detail/:id', detail)
.get('/edit/:id', editForm)
.put('/edit/:id', upload.array('image'), edit)
.get('/carrito', carrito)
.delete('/delete/:id', destroy)

module.exports = router;
