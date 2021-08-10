const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));


app.listen(port, ()=> console.log(`servidor corriendo en http://localhost:${port}`));