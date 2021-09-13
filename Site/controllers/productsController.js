module.exports = {
    detalle : (req,res) => {
        return res.render('detalle', {
            title : 'Detalle de producto'
        });
    },
    carrito : (req,res) => {
        return res.render('carrito', {
            title : 'Carrito'
        });
    },
    add : (req,res) => {
        return res.render('productAdd', {
            title : 'Agregar producto'
        });
    },
    edit : (req,res) => {
        return res.render('productEdit', {
            title : 'Editar producto'
        });
    }
}