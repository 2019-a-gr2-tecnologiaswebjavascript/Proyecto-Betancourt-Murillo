/**
 * BodegaProducto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    stock : {
      type : 'number',
      min : 0,
      isInteger : true
    },
    producto_FK : {
      model : 'Producto'
    },
    bodega_FK : {
      model : 'Bodega'
    }

  },

};

