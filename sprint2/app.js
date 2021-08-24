const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname,'views','carrito.html')));
app.get('/detalle',(req,res) => res.sendFile(path.join(__dirname,'views','detalle.html')));
app.get('/footer',(req,res) => res.sendFile(path.join(__dirname,'views','footer.html')));
app.get('/header',(req,res) => res.sendFile(path.join(__dirname,'views','header.html')));


app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:${port}`));