/**
 * Pedido.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fecha : {
      type : 'string',
      required : true,
      regex : /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
    },
    precioTotal : {
        type : 'number',
        min : 0
    },
    productos : {
        collection : 'PedidoProducto',
        via : 'pedido_FK'
    },
    bodega_FK :{
      model: 'Bodega'
    },
    finalizado : {
      type : 'boolean'
    }

  },

};

