var express = require('express');
var router = express.Router();
const upload = require('../middlewares/multerProducts')


const {getEmails,deleteImage,addImage} = require('../controllers/apiController');

/* /api */
router
    .get('/get-emails', getEmails)
    .post('/delete-image/:id', deleteImage)
    .post('/add-images/:id', upload.any(), addImage)
   
module.exports = router;
