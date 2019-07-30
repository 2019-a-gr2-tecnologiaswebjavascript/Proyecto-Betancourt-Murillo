/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre : {
      type : 'string',
      minLength : 3,
      maxLength : 45
    },
    precio : {
      type : 'number',
      min : 0
    },
    pedidos : {
      collection : 'PedidoProducto',
      via : 'producto_FK'
    },
    bodegas : {
      collection : 'BodegaProducto',
      via : 'producto_FK'
    },
    picFD : {
      type : 'string'
    },
    distribuidor : {
      type : 'string'
    }

  },

};

