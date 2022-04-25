const path = require('path');
const multer = require('multer');

/* configuración de multer */
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'./public/images/products')
    },
    filename : (req,file,callback) => {
        callback(null,'img-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Solo imágenes con extensión JPG, JPEG, PNG, ó GIF";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}
// const fileLimit = function(req, file,callback) {
//     if(limits > 3){
//         req.fileValidationError = "Máximo 3 imágenes";
//         return callback(null,false,req.fileValidationError);
//     }
//     callback(null,true);
// }

const upload = multer({
    storage,
    fileFilter,
    limits: {files: 3}
});

module.exports = upload;