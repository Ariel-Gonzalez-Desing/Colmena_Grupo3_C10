const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));

const firstLetter = require('../utils/firstLetter');

module.exports = {
    detalle : (req,res) => {
        return res.render('detalle', {
            title : 'Detalle de producto'
        });
    },
    carrito : (req,res) => {
        return res.render('carrito', {
            title : 'Carrito de compras'
        });
    },
    add : (req,res) => {
        return res.render('productAdd', {
            title : 'Agregar producto',
            categories,
            firstLetter
        });
    },
    edit : (req,res) => {
        return res.render('productEdit', {
            title : 'Editar producto',
            product : products.find(product => product.id === +req.params.id),
            firstLetter
        });
    },
    update : (req,res) => {    
            
        const {name,price,category,description} = req.body;

        let product = products.find(product => product.id === +req.params.id);

        let productModified = {
            id : +req.params.id,
            name : name.trim(),
            price : +price,
            category,            
            description : description.trim(),
            image : product.image
        }

        let productsModified = products.map(product => product.id === +req.params.id ? productModified : product);

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');

        return res.redirect('/admin')
    },
    destroy : (req,res) => {

        let productsModified = products.filter(product => product.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');

        return res.redirect('/admin')    
    }
}