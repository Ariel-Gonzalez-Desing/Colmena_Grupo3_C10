//Form de Contacto

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