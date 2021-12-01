const {check, body} = require('express-validator');
const db = require('../database/models');
const path = require('path')

module.exports = [

    check('name')
        .notEmpty().withMessage('Debes ingresar el nombre del producto').bail()
        .isLength({min : 5}).withMessage('Mínimo 5 caracteres'),

    check('description')
        .notEmpty().withMessage('Debes ingresar una descripcion').bail()
        .isLength({
            min : 20
        }).withMessage('La descripción debe tener un mínimo de 20 caracteres'),       

    check('size')
        .notEmpty().withMessage('Debes ingresar tamaño del producto'), 

    check('price')
    .isDecimal({
        min: 1
    }).withMessage('Debe un número válido'),

    check('category')
    .notEmpty().withMessage('Debes ingresar una categoría'), 
    
    check('display')
        .notEmpty().withMessage('Debes ingresar el display'),

    check('image')
        .matches(/^.*\.(jpg|JPG|gif|GIF|jpeg|JPEG|png|PNG)$/).withMessage('sobroldkjslkd')
    
]

