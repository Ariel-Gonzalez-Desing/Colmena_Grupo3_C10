module.exports = {
    detalle : (req,res) => {
        return res.render('detalle', {
            title : 'Detalle de producto'
        });
    },
    carrito : (req,res) => {
        return res.render('carrito', {
            title : 'Carrito'
        })
    }
}