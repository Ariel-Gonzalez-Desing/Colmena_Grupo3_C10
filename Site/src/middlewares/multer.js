const path = require('path');
const multer = require('multer');

/* configuración de multer */
const storage = multer.diskStorage({
    destination : (req,file,callaback) => {
        callaback(null,'./public/images/products')
    },
    filename : (req,file,callaback) => {
        callaback(null,'img-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
    limits: {files: 3}
});

module.exports = upload;