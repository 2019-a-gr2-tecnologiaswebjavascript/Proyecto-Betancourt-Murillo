/**
 * DetallePedido.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad : {
      type : 'number'
    },
    ventas_FK : {
      model : 'Ventas'
    },
    producto_FK : {
      model : 'Producto'
    }

  },

};

