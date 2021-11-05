const fs = require('fs');
const path = require('path');

// const {dirname} = require('path');

let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));

/* base de datos */
const db = require('../database/models');

const cuota = require('../utils/cuota');
const firstLetter = require('../utils/firstLetter');

module.exports = {
    createForm : (req,res) => {
        
        dg.Category.findAdd()
            .then(categories => {
                return res.render('products/productAdd', {
                    title : 'Agregar producto',
                    categories,
                    firstLetter
                })
            })        
    },

    create : (req,res) => {
               
        const {name, size, price, category, description} = req.body;

        db.Product.create({
            name : name.trim(),
            size: size.trim(),
            price : +price,
            categoryId: category,
            description : description.trim()
        })
            .then(product => {
                if(req.files[0] != undefined) {

                    let images = req.files.map(image => {
                        let img = {
                            file : image.filename,
                            productId : product.id
                        }
                        return img
                    });
                    db.Image.bulkCreate(images, {validate : true})
                        .then( () => console.log('imagenes agregadas'))
                }
                return res.redirect('/admin')
            })
            .catch(error => console.log(error))        
    },

    productsList : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));
        return res.render('products/productsList', {
            title : 'Listado de productos',           
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            firstLetter
        });
    },

    detail : (req,res) => {

        db.Product.findByPk(req.params.id, {
            include: ['images']
        })
            .then(product => {
                db.Category.findByPk(product.categoryId, {
                    include: [
                        {
                            association: 'products',
                            include: ['images'],
                        }
                    ]
                })
                    .then(category => {
                        return res.render('products/detalle', {
                            title : 'Detalle de producto',           
                            product : products.find(product => product.id === +req.params.id),
                            products: category.products,
                            cuota,
                            firstLetter
                        });
                    })
            })        
            .catch(error => console.log(error))
    },

    editForm : (req,res) => {

        let product = db.Product.findByPk(req.params.id)
        let categories = db.Category.findAll()

        Promise.all([product,categories])
        
        .then(([product, categories]) => {
            return res.render('products/productEdit', {
                title : 'Editar producto',
                product : products.find(product => product.id === +req.params.id),
                firstLetter,
                categories
            });
        })
        .catch(error => console.log(error))
    },

    edit : (req,res) => {       

        const {name, size, price, category, description} = req.body;

        db.Product.update(
            {
                name : name.trim(),
                size : size.trim(),
                price : +price,
                category,            
                description : description.trim()
            },
            {
                where : {id : req.params.id}
            }
        )
            .then(() => {
                return res.redirect('/admin'),
                firstLetter
            })        
    },

    carrito : (req,res) => {
        return res.render('products/carrito', {
            title : 'Carrito de compras',
            firstLetter
        });
    },   
    
    destroy : (req,res) => {

        db.Product.destroy({
            where : {id: req.params.id}
        })
            .then(() => {
                return res.redirect('/admin')  
            })
            .catch(error => console.log(error))   
    }
}