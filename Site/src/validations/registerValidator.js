const {body,check} = require('express-validator');
const users = require('../data/users.json');

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
            let user = users.find(user => user.email === value);
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('El email ya se encuentra registrado'),

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
        }).withMessage('Las contraseñas no coinciden'),

    // check('terms')
    //     .isString('on').withMessage('Debes aceptar los términos y condiciones')
    
]