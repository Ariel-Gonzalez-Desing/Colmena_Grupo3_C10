const {body, check} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('name')
        .isLength({min : 2}).withMessage('Mínimo 2 caracteres'),

    check('lastName')
        .isLength({min : 2}).withMessage('Mínimo 2 caracteres'),

    body('passwordEdit')
    .optional({ checkFalsy: true })
    .custom((value) => {
        if (value === 'on') {
          [
            body('passwordBefore')       
            .custom((value,{req}) => {
                console.log(req.body)
                return db.User.findOne({
                    where :{
                        id : req.session.userLogin.id
                    }
                }).then(user => {
                    if(!user || !bcrypt.compareSync(req.body.passwordBefore,user.password)){
                        return Promise.reject()
                    }
                }).catch( () => Promise.reject('Contraseña incorrecta'))
        
            }),   

            check('password')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).withMessage('Mínimo 8 letras, y debe contener mayúscula, un número y un carácter especial.'),

            body('rePassword')
                .custom((value,{req}) => {
                    if(value !== req.body.password){
                        return false
                    }else{
                        return true
                    }
                }).withMessage('Las contraseñas no coinciden')
                ]
                } else {

                return Promise.resolve();
                }

      })




    // body('passwordBefore')
    //     .optional({ checkFalsy: true })
    //     .custom((value,{req}) => {
    //         console.log(req.body)
    //         return db.User.findOne({
    //             where :{
    //                 id : req.session.userLogin.id
    //             }
    //         }).then(user => {
    //             if(!user || !bcrypt.compareSync(req.body.passwordBefore,user.password)){
    //                 return Promise.reject()
    //             }
    //         }).catch( () => Promise.reject('Contraseña incorrecta'))

    // }),

    // check('password')
    //     .optional({ checkFalsy: true })
    //     .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).withMessage('Mínimo 8 letras, y debe contener mayúscula, un número y un carácter especial.'),

    // body('rePassword')
    //     .optional({ checkFalsy: true })
    //     .custom((value,{req}) => {
    //         if(value !== req.body.password){
    //             return false
    //         }else{
    //             return true
    //         }
    //     }).withMessage('Las contraseñas no coinciden')
]

