const {check} = require('express-validator');
const db = require('../database/models');

module.exports = [

    check('name')
        .notEmpty().withMessage('Debes ingresar el nombre del producto'),

    check('description')
        .notEmpty().withMessage('Debes ingresar una descripcion de al menos 20 caracteres'),        

    check('size')
        .notEmpty().withMessage('Debes ingresar tamaño del producto'), 

    check('price')
        .notEmpty().withMessage('Debes ingresar precio dle producto'), 

    check('category')
    .notEmpty().withMessage('Debes ingresar una categoría'), 
    
    check('display')
        .notEmpty().withMessage('Debes ingresar el display'), 
    
]