const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

let users = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'))

module.exports = {
    registro : (req,res) => {
        return res.render('users/registro', {
            title : 'Registro usuario',
        });
    },
    processRegistro : (req,res) => {
        const {name, lastname, email, password, rePassword} = req.body;

        let user = {
            id : users.length !=0 ? users[users.length - 1].id + 1 : 1,
            name : name.trim(),
            lastname : lastname.trim(),
            email : email.trim(),
            password : bcrypt.hashSync(password,10),
            rePassword : bcrypt.hashSync(password,10),
            avatar : req.file ? req.file.filename : 'default.jpg',
            rol : "user"
        }
        users.push(user);
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
            
        return res.redirect('/')
    },
    login : (req,res) => {
        return res.render('users/login', {
            title : 'Login usuario',
        })
    }
}