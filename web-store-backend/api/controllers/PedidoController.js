/**
 * PedidoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    listAll : async(req,res) => {
        try{
            const orders = await Pedido.find()
                .populate('productos')
                .populate('bodega_FK')
            var response = []
            var details = []
            orders.forEach(async order => {
                const detalles = await PedidoProducto.find({pedido_FK : order.id}).populate('producto_FK')
                detalles.forEach(detail => {
                    details.push({
                        "cantidad" : detail.cantidad,
                        "producto" : detail.producto_FK
                    })
                })
                response.push({
                    "id" : order.id,
                    "fecha" : order.fecha,
                    "precioTotal" : order.precioTotal,
                    "finalizado" : order.finalizado,
                    "productos" : details,
                    "bodega" : order.bodega_FK
                })
                details = []
            });
            setTimeout(function(){
                return res.ok(response)
            }, 2000)
        }catch{
            return res.serverError()
        }
    }

};

