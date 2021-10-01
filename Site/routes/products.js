var express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')

const {products, createForm, create, detail, editForm, edit, cart, destroy} = require('../controllers/productsController');

/* /products */
router
.get('/', products)
.get('/create', createForm)
.post('/create', upload.array('image'), create)
.get('/detail/:id', detail)
.get('/edit/:id', editForm)
.put('/edit/:id', upload.array('image'), edit)
.get('/cart', cart)
.delete('/delete/:id', destroy)

module.exports = router;
