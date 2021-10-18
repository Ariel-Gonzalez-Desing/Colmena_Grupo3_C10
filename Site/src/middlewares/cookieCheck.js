module.exports = (req, res, next) => {
    if(req.cookies.Colmena){
        req.session.user = req.cookies.Colmena;
    }
    next();
}