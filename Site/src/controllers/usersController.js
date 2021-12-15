const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const firstLetter = require('../utils/firstLetter');

/* base de datos */
const db = require('../database/models');

// let users = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));
const {validationResult} = require('express-validator');

module.exports = {
    registro : (req,res) => {
        return res.render('users/registro', {
            title : 'Registro usuario',
        });
    },
    processRegistro : (req,res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            
            const {name, lastname, email, password} = req.body;

            db.User.create({
                firstName: name.trim(),
                lastName: lastname.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(password, 10),
                avatar : req.file ? req.file.filename : 'default.jpg',
                rolId : 1
            })
                .then(user => {
                    req.session.userLogin = {
                        id : user.id,
                        name : user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        avatar : user.avatar,
                        rol : user.rolId
                    }

                    return res.redirect('/') 
                })                  
                .catch(error => res.send(error))            

        }else{

        return res.render('users/registro',{
            title: 'Registro usuario',
            errors : errors.mapped(),
            old : req.body
        })}
    },
    login : (req,res) => {

        return res.render('users/login', {
            title : 'Login usuario',
        })
    },
    processLogin : (req,res) => {

        let errors = validationResult(req);
        
        if(errors.isEmpty()){

            db.User.findOne({
                where: {email: req.body.email.trim()}
            })
                .then(user => {
                    req.session.userLogin = {
                    id : user.id,
                    name : user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    avatar : user.avatar,
                    rol : user.rolId
            }
            if(req.body.remember){
                res.cookie('colmenaCookie', req.session.userLogin,{maxAge : 1000 * 60})
            }
            return res.redirect('/')
                })
                .catch(error => console.log(error))
            
        }else{
            return res.render('users/login',{
                title: 'Login usuario',
                errors : errors.mapped()
            })
        }
    },
    profile : (req,res) => {

        db.User.findOne({
            where: {id: req.session.userLogin.id}
        })
            .then(user => {
                return res.render('users/profile', {
                    title: 'Perfil de Usuario',
                    user,
                    firstLetter
                })
            })  
            .catch(error => console.log(error))      
    },
    profileEdit : (req,res) => {

        db.User.findOne({
            where: {id: req.session.userLogin.id}
        })
            .then(user => {
                return res.render('users/edit', {
                    title: 'Editar perfil',
                    user,
                    firstLetter
                })
            })  
            .catch(error => console.log(error))      
    },
    profileUpdate : (req,res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){

        const {name, lastName, password} = req.body;

        db.User.update(
            {
                firstName: name,
                lastName: lastName,
                avatar: req.file? req.file.filename : req.session.userLogin.avatar              
            },
            {
                where : {id: req.session.userLogin.id}
            })    

            .then(() => {
                if (password) {
                    db.User.update(
                        {
                            password: bcrypt.hashSync(password.trim(), 10)
                        },
                        {
                            where: {id: req.session.userLogin.id}
                        }
            )
            .then(() => {
                req.session.destroy();
                return res.redirect('/users/login')
            })

                } else {

                    db.User.findByPk(req.session.userLogin.id)
                        .then(user => {
                            req.session.userLogin = {
                                id : user.id,
                                name : user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                avatar : user.avatar,
                                rol : user.rolId
                            }
                            res.locals.userLogin = req.session.userLogin

                            return res.redirect('/users/profile')
                        })
                }
            })  
            .catch(error => console.log(error))
        }else{
            return res.render('users/edit',{
                title: 'Editar perfil',
                errors : errors.mapped()
            })
        }
    },
    logout : (req,res) =>{

        req.session.destroy(function() {
            res.clearCookie('colmenaCookie', { path: '/' });
            res.redirect('/')
          });
    }
}

