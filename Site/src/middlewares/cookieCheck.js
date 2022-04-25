module.exports = (req,res,next) =>{
    if(req.cookies.colmenaCookie){
        req.session.userLogin = req.cookies.colmenaCookie
    }
    next()
}