const fs = require('fs');
const path = require('path');

// const {dirname} = require('path');

let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));

const cuota = require('../utils/cuota');
const firstLetter = require('../utils/firstLetter');

module.exports = {
    products : (req, res) => {
        return res.render('admin'),
        firstLetter
    },

    createForm : (req,res) => {
        return res.render('products/productAdd', {
            title : 'Agregar producto',
            categories,
            firstLetter
        });
    },

    create : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));
        
            const {name, size, price, category, description} = req.body;
            let images = req.files.map(image => image.filename);

            let product = {
                id : products[products.length - 1].id + 1,
                name : name.trim(),
                size: size.trim(),
                price : +price,
                category,
                description : description.trim(),
                image : req.files.length !=0 ? images : ['default-image.png'],
            }

            products.push(product);

            fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(products,null,3),'utf-8');
    
            return res.redirect('/admin')
    },

    detail : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));
        return res.render('products/detalle', {
            title : 'Detalle de producto',           
            product : products.find(product => product.id === +req.params.id),
            cuota,
            firstLetter
        });
    },

    editForm : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));
        return res.render('products/productEdit', {
            title : 'Editar producto',
            product : products.find(product => product.id === +req.params.id),
            firstLetter,
            categories
        });
    },

    edit : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));
        const {name, size, price, category, description} = req.body;

        let product = products.find(product => product.id === +req.params.id);           

        let productModified = {
            id : +req.params.id,
            name : name.trim(),
            size : size.trim(),
            price : +price,
            category,            
            description : description.trim(),
            image : product.image
        }

        let productsModified = products.map(product => product.id === +req.params.id ? productModified : product);

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');

        return res.redirect('/admin'),
        firstLetter
    },

    cart : (req,res) => {
        return res.render('products/carrito', {
            title : 'Carrito de compras',
            firstLetter
        });
    },   
    
    destroy : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

        let product = products.find(product => product.id === +req.params.id);

        product.image.forEach(img => {
            fs.existsSync(path.join(__dirname,'../public/images/products',img)) ? fs.unlinkSync(path.join(__dirname,'../public/images/products',img)) : null

        });

        let productsModified = products.filter(product => product.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');

        return res.redirect('/admin')    
    }
}