module.exports = {
    registro : (req,res) => {
        return res.render('users/registro', {
            title : 'Registro usuario',
        });
    },
    login : (req,res) => {
        return res.render('users/login', {
            title : 'Login usuario',
        })
    },
    processLogin :(req,res)=>{
        let errors = validationResult(req);

        if (errors.isEmpty()) {

        }else{
            return res.render('login', {errors: errors.errors});
        }
    }
}

//quedé en SESSIONS playground 13:13