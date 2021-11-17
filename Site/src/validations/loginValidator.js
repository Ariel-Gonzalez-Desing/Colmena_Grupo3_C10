const {body} = require('express-validator');
// const users = require('../data/users.json');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    body('email')
        .custom((value,{req}) => {
            console.log(req.body)
            return db.User.findOne({
                where :{
                    email : value
                }
            }).then(user => {
                if(!user || !bcrypt.compareSync(req.body.password,user.password)){
                    return Promise.reject()
                }
            }).catch( () => Promise.reject('Email o contraseña incorrectos'))
    })
]


