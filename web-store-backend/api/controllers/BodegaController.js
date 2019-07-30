/**
 * BodegaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    listAll : async(req, res) => {
        var warehouses = await Bodega.find().populate('productos')
        var response = []
        var products = []
        warehouses.forEach(async (warehouse) => {
            var content = await BodegaProducto.find({bodega_FK : warehouse.id}).populate('producto_FK')
            content.forEach(product => {
                products.push(
                    {
                        "stock": product.stock,
                        "producto": product.producto_FK
                    })
            })
            response.push({
                "id" : warehouse.id,
                "direccion" : warehouse.direccion,
                "productos" : products
            })
            products = []
        });
        setTimeout(function(){
            return res.ok(response)
        }, 2000)
    }

};

