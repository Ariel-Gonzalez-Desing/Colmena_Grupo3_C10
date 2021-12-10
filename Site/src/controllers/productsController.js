const fs = require('fs');
const path = require('path');

// let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
// let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));

/* base de datos */
const db = require('../database/models');
const {validationResult} = require('express-validator');

const cuota = require('../utils/cuota');
const firstLetter = require('../utils/firstLetter');

module.exports = {
    createForm : (req,res) => {
        
        let categories = db.Category.findAll()
        let displays = db.Display.findAll()

        Promise.all(([categories, displays]))

            .then(([categories, displays]) => {
                return res.render('products/productAdd', {
                    title : 'Agregar producto',
                    categories,
                    displays,
                    firstLetter
                })
            }) 
            .catch(error => console.log(error))       
    },

    create : (req,res) => {

        let errors = validationResult(req);
        
        if(errors.isEmpty()){
               
        const {name, size, price, category, display, description} = req.body;

        db.Product.create({
            name : name.trim(),
            size: size.trim(),
            price : +price,
            categoryId: category,
            displayId: display,
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
                return res.redirect('/adminProducts')
            })
            .catch(error => console.log(error))    
            
        } else {

            errors = errors.mapped()

            if (req.fileValidationError) {
                errors = {
                    ...errors,
                    image: {
                        msg: req.fileValidationError,
                    },
                };
            }

            let categories = db.Category.findAll()
            let displays = db.Display.findAll()

            Promise.all([categories, displays])
            .then(([categories, displays]) => {
                return res.render('products/productAdd', {
                    categories,
                    displays,
                    firstLetter,
                    errors,
                    old: req.body
                })
            })
            .catch(error => console.log(error))
        }
    },

    productsList : (req,res) => {

        db.Product.findAll({
            include: ['images']
        })
            .then(products => {
                return res.render('products/productsList', {
                    title : 'Listado de productos',           
                    products,
                    firstLetter
                });
            })
            .catch(error => console.log(error))  
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
                            product,
                            products: category.products,
                            cuota,
                            firstLetter
                        });
                    })
            })        
            .catch(error => console.log(error))
    },

    editForm : (req,res) => {

        let product = db.Product.findByPk(req.params.id, {
            include: ['images']
        })
        let categories = db.Category.findAll()
        let displays = db.Display.findAll()

        Promise.all([product,categories, displays])
        
        .then(([product, categories, displays]) => {
            return res.render('products/productEdit', {
                title : 'Editar producto',
                firstLetter,
                categories,
                product,
                displays
            });
        })
        .catch(error => console.log(error))
    },

    edit : (req,res) => {    

    let errors = validationResult(req);
        
    if(errors.isEmpty()){   

        const {name, size, price, category, display, description} = req.body;

        db.Product.update(
            {
                name : name.trim(),
                size : size.trim(),
                price : +price,
                categoryId: category,
                displayId : display,          
                description : description.trim()
            },
            {
                where : {id : req.params.id}
            })

            .then(() => {
                if(req.files[0] != undefined) {
                    db.Image.destroy(
                            {
                                where: {
                                    productId: req.params.id
                                }
                            }
                        )
                        .then(() => {
                            let images = req.files.map(image => {
                                let img = {
                                    file: image.filename,
                                    productId: req.params.id
                                }
                                return img
                            })
                            db.Image.bulkCreate(images, { validate: true })

                                .then(() => {
                                    return res.redirect('/adminProducts')
                                })
                                .catch(error => console.log(error))
                        })
                    } else {
                        console.log('edicion sin imagen')
                        return res.redirect('/adminProducts')
                    }
                })       
        } else {

            let product = db.Product.findByPk(req.params.id)
            let categories = db.Category.findAll()
            let displays = db.Display.findAll()
    
            Promise.all([product, categories, displays])
    
            .then(([product,categories, displays]) => {
                return res.render('products/productEdit', {
                    categories,
                    product,
                    displays,
                    firstLetter,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => console.log(error))
        }
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
                return res.redirect('/adminProducts')  
            })
            .catch(error => console.log(error))   
    }
}