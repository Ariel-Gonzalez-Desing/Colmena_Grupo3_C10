const fs = require('fs');
const path = require('path');

/* base de datos */
const db = require('../database/models');

// let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

const firstLetter = require('../utils/firstLetter');

module.exports = {
    index : (req,res) => {
        let size = db.Size.findAll()
        let destacados = db.Product.findAll({
            include : ['images', 'display', 'size'],
            where : {
                displayId : 1
            },
            limit : 3
        })
        Promise.all([destacados, size])
            .then(([destacados, size]) => {
                return res.render('main/index', { 
                    title: 'Colmena',
                    destacados,
                    size,
                    firstLetter            
                })
            })
            .catch(error => console.log(error))               
    },
    adminProducts : (req,res) => {
        let size = db.Size.findAll()
        let products = db.Product.findAll({
            include : ['images', 'size']
        })
        let categories = db.Category.findAll()

        Promise.all([products, categories, size])
            .then(([products, categories, size]) => {
                return res.render('main/adminProducts', { 
                    title: 'Admin Colmena',
                    products, 
                    categories,
                    size
                })
            })        
    },
    adminUsers : (req,res) => {

        let users = db.User.findAll()
        let rol = db.Rol.findAll()
        
        Promise.all([users, rol])

            .then(([users, rol]) => {
                return res.render('main/adminUsers', { 
                    title: 'Admin Colmena',
                    users,
                    rol,
                    firstLetter
                })
            })    
            .catch(error => console.log(error))      
    },
    rolEdit : (req,res) => {

        const {rol} = req.body;

        console.log(rol)
        db.User.findByPk(req.params.id)
       
        .then(user => {
            if(rol === 'on'){
                db.User.update(
                    {
                        rolId: 2       
                    },
                    {
                        where : {id: user.id}
                    })    
                    .then(() => {
                        return res.redirect('/adminUsers')
                    })
            } else {
                db.User.update(
                    {
                        rolId: 1       
                    },
                    {
                        where : {id: user.id}
                    })    
                    .then(() => {
                        return res.redirect('/adminUsers')
                    }).catch(error => console.log(error))          
            }})
    },
    deleteUser : (req,res) => {

        db.User.destroy({
            where : {id: req.params.id}
        })
            .then(() => {
                return res.redirect('/adminUsers')  
            })
            .catch(error => console.log(error))   
    }
}