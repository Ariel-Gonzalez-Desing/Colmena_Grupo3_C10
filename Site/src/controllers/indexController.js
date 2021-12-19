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
};


consult : (req, res) => {
    let errores = validationResult(req);

    if (!errores.isEmpty()) {
      db.Budgets.findAll()

        .then((budgets) => {
          return res.render("services", {
            title: "Abonos y servicios - Colmena",
            errores: errores.mapped(),
            budgets,
            old: req.body,
          });
        })
        .catch((error) => res.send(error));
    } else {
      let { fullName, tel, email, message } = req.body;

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
      
        auth: {
          user:"colmenamielc10@gmail.com", //email emisor, preferentemente gmail
          pass:"Colmena1234$", //contraseña de email emisor
        }
      });

      let mailOptions = {
        from: `${fullName}`,
        to: "colmenaservicios10@gmail.com", //email receptor, preferentemente outlook
        subject: "Consulta de Colmena",
        text: `Remitente
            Nombre completo: ${fullName}
            Teléfono: ${tel}
            Email: ${email}
            Mensaje: 
            ${message}`,
      };
      console.log(transporter);
      console.log(mailOptions);
      console.log("por enviar");

      transporter.sendMail(mailOptions, (error, info) => {
        console.log(info);
        console.log(error);
        if (error) {
          

          db.Budgets.findAll()

            .then((budgets) => {
              return res.render("services", {
                title: "Abonos y servicios - Adonai",
                budgets,
                old: req.body,
                consultingError: "error", //crear condicion y cartel de error al enviar consulta
                error,
                info
              });
            })
            .catch((error) => res.send(error));
        } else {
          
          db.Budgets.findAll()

            .then((budgets) => {
              return res.render("services", {
                title: "Abonos y servicios - Adonai",
                budgets,
                consultingSuccess: "Success", //crear condicion y cartel de éxito al enviar consulta
              });
            })
            .catch((error) => res.send(error));
        }
      });
    }
  }