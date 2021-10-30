const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

const firstLetter = require('../utils/firstLetter');

module.exports = {
    index : (req,res) => {
        return res.render('main/index', { 
            title: 'Colmena',
            destacados : products.filter(product => product.category === 'destacados'),
            firstLetter            
        })
    },
    adminProducts : (req,res) => {
        return res.render('main/adminProducts', { 
            title: 'Admin Colmena',
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
        })
    },
    adminUsers : (req,res) => {
        return res.render('main/adminUsers', { 
            title: 'Admin Colmena',
            users : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'))
        })
    }
}