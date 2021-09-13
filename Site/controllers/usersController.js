module.exports = {
    registro : (req,res) => {
        return res.render('registro', {
            title : 'Registro usuario',
        });
    },
    login : (req,res) => {
        return res.render('login', {
            title : 'Login usuario',
        })
    }
}