const {body, check} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [

    body('passwordBefore')
        .custom((value,{req}) => {
            console.log(req.body)
            return db.User.findOne({
                where :{
                    id : req.session.userLogin.id
                }
            }).then(user => {
                if(!user || !bcrypt.compareSync(req.body.password,user.password)){
                    return Promise.reject()
                }
            }).catch( () => Promise.reject('Contraseña incorrecta'))
    }),   

    check('password')
        .notEmpty().withMessage('Debes ingresar una nueva contraseña').bail()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).withMessage('Mínimo 8 letras, y debe contener mayúscula, un número y un carácter especial.'),

    body('rePassword')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden'),
]

