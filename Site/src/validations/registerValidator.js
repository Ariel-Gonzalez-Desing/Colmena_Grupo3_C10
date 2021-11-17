const {body,check} = require('express-validator');
// const users = require('../data/users.json');
const db = require('../database/models');

module.exports = [

    check('name')
        .notEmpty().withMessage('Debes ingresar tu nombre'),

    check('lastname')
        .notEmpty().withMessage('Debes ingresar tu apellido'),        

    check('email')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email inválido'),

    body('email')
        .custom(value  => {
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(user){
                    return Promise.reject('El email ya está registrado')
                }
            })
        }),

    check('password')
        .isLength({
            min : 6,
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    
    body('rePassword')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden')
    
]