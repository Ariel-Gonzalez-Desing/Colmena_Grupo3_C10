var express = require('express');
const router = express.Router();

const {detalle, carrito} = require('../controllers/productsController');

/* /products */
router.get('/detalle', detalle);
router.get('/carrito', carrito);

module.exports = router;
