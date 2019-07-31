/**
 * Ventas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre : {
      type : 'string'
    },
    apellido : {
      type : 'string'
    },
    ci : {
      type : 'string'
    },
    correo : {
      type : 'string'
    },
    direccion : {
      type : 'string'
    },
    productos : {
      collection : 'DetallePedido',
      via : 'ventas_FK'
    },
    bodega : {
      model : 'Bodega'
    },
    fecha : {
      type : 'string'
    },
    total : {
      type : 'number'
    },
    finalizado : {
      type : 'boolean'
    }

  },

};

