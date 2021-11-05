const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

const firstLetter = require('../utils/firstLetter');

module.exports = {
    index : (req,res) => {

        db.Product.findAll({
            include : ['category', 'images', 'display'],
            where : {
                sectionId : 1, 
                discount : 0 ('si agregamos otra seccion, que no se repitan los prod')
            }
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
            include : ['images', 'category']
        })
        let categories = db.Category.findAll()

        Promise.All([products, categories])
            .then(([products, categories]) => {
                return res.render('main/adminProducts', { 
                    title: 'Admin Colmena',
                    products
                })
            })        
    },
    adminUsers : (req,res) => {

        let users = cb.User.findAll({
            include : ['rols']
        })
        let rols = db.Rol.findAll()

        Promise.All([users, rols])
            .then(([users, rols]) => {
                return res.render('main/adminUsers', { 
                    title: 'Admin Colmena',
                    users
                })
            })        
    }
}