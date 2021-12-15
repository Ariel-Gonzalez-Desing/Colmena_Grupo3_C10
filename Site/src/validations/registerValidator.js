const {body,check} = require('express-validator');
// const users = require('../data/users.json');
const db = require('../database/models');
const path = require('path');

module.exports = [

    check('name')
        .notEmpty().withMessage('Debes ingresar tu nombre').bail()
        .isLength({min : 2}).withMessage('Mínimo 2 caracteres'),

    check('lastname')
        .notEmpty().withMessage('Debes ingresar tu apellido').bail()
        .isLength({min : 2}).withMessage('Mínimo 2 caracteres'),        

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
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/).withMessage('Mínimo 8 letras, y debe contener mayúscula, un número y un carácter especial.'),
    
    body('rePassword')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden'),

    body('image')
        .custom((value, { req }) => {
            let file = req.file;
            let extensionesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
            if (!file) {
                null;
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!extensionesValidas.includes(fileExtension)) {
                    throw new Error('Solo se aceptan archivos JPG, JPEG, PNG y GIF');
                }
            }
            return true;
	})
    
]