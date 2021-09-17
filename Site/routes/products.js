var express = require('express');
const router = express.Router();

const {detalle, carrito, add, edit} = require('../controllers/productsController');

/* /products */
router.get('/detalle/:id', detalle);
router.get('/carrito', carrito);
router.get('/add', add);
router.get('/edit/:id', edit);

module.exports = router;
