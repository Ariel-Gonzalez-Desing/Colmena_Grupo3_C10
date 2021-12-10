const {body, check} = require('express-validator');
// const users = require('../data/users.json');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('email')
    .notEmpty().withMessage('Debes ingresar tu email').bail()
    .isEmail().withMessage('Email inválido'),

    check('password')
    .notEmpty().withMessage('Debes ingresar tu contraseña'),

    body('password')
        .custom((value,{req}) => {
            console.log(req.body)
            return db.User.findOne({
                where :{
                    email : req.body.email
                }
            }).then(user => {
                if(!user || !bcrypt.compareSync(req.body.password,user.password)){
                    return Promise.reject()
                }
            }).catch( () => Promise.reject('Email o contraseña incorrectos'))
    })
]


