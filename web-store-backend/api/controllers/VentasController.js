/**
 * VentasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    listAll : async (req,res) => {
        try{
            var sales = await Ventas.find().populate('productos').populate('bodega')
            var response = []
            var saleDetails = []
            sales.forEach(async (sale) => {
                const details = await DetallePedido.find({ventas_FK : sale.id}).populate('producto_FK') 
                details.forEach(detail => {
                    saleDetails.push({
                        "cantidad": detail.cantidad,
                        "producto" : detail.producto_FK
                    })
                })
                response.push({
                    "id" : sale.id,
                    "nombre" : sale.nombre,
                    "apellido" : sale.apellido,
                    "ci" : sale.ci,
                    "correo" : sale.correo,
                    "direccion" : sale.direccion,
                    "bodega" : sale.bodega,
                    "productos" : saleDetails,
                    "fecha" : sale.fecha,
                    "total" : sale.total,
                    "finalizado" : sale.finalizado
                })
                saleDetails = []
            });
            setTimeout(function(){
                return res.ok(response)
            }, 2000)
        }catch{
            return res.serverError()
        }
    }

};

