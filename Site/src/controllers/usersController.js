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
    }
}