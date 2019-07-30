/**
 * Bodega.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    direccion : {
      type : 'string',
      minLength : 3,
      maxLength : 128
    },
    productos : {
      collection : 'BodegaProducto',
      via: 'bodega_FK'
    }

  },

};

