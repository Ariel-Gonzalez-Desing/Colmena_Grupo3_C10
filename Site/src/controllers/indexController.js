const fs = require('fs');
const path = require('path');

/* base de datos */
const db = require('../database/models');

// let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

const firstLetter = require('../utils/firstLetter');

module.exports = {
    index : (req,res) => {

        db.Product.findAll({
            include : ['images', 'display'],
            where : {
                displayId : 1
            },
            limit : 3
        })
            .then(destacados => {
                return res.render('main/index', { 
                    title: 'Colmena',
                    destacados,
                    firstLetter            
                })
            })
            .catch(error => console.log(error))               
    },
    adminProducts : (req,res) => {

        let products = db.Product.findAll({
            include : ['images']
        })
        let categories = db.Category.findAll()

        Promise.all([products, categories])
            .then(([products, categories]) => {
                return res.render('main/adminProducts', { 
                    title: 'Admin Colmena',
                    products, 
                    categories
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
                    rol
                })
            })    
            .catch(error => console.log(error))      
    }
}