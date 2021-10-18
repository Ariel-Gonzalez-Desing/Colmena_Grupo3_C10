const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

let users = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));
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
            const {name, lastname, email, password, rePassword} = req.body;
            let user = {
                id : users.length !=0 ? users[users.length - 1].id + 1 : 1,
                name : name.trim(),
                lastname : lastname.trim(),
                email : email.trim(),
                password : bcrypt.hashSync(password,5),
                rePassword : bcrypt.hashSync(password,5),
                avatar : req.file ? req.file.filename : 'default.jpg',
                rol : "user"
            }
            users.push(user);
            fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
                
            req.session.userLogin = {
                id : user.id,
                name : user.name,
                avatar : user.avatar,
                rol : user.rol
            }

            return res.redirect('/')
            // return res.redirect('/user/profile')

        }else{
        return res.render('users/registro',{
            errores : errors.mapped(),
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
            let user = users.find(user => user.email === req.body.email);
            req.session.userLogin = {
                id : user.id,
                name : user.name,
                avatar : user.avatar,
                rol : user.rol
            }
            if(req.body.remember){
                res.cookie('craftsyForEver',req.session.userLogin,{maxAge : 1000 * 60})
            }
            return res.redirect('/')
        }else{
            return res.render('users/login',{
                errores : errors.mapped()
            })
        }
    },
    profile : (req,res) => {
        let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'));
        return res.render('profile',{
            user : users.find(user => user.id === req.session.userLogin.id)
        })
    }
}


