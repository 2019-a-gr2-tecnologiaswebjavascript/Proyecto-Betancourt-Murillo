/**
 * PedidoProducto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad : {
      type : 'number',
      min : 0,
      isInteger: true
    },
    pedido_FK : {
      model : 'Pedido'
    },
    producto_FK : {
      model : 'Producto'
    }

  },

};

