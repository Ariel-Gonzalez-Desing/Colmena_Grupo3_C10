const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

module.exports = {
    index : (req,res) => {
        return res.render('main/index', { 
            title: 'Colmena'            
        })
    },
    admin : (req,res) => {
        return res.render('main/admin', { 
            title: 'Admin Colmena',
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
        })
    },
}