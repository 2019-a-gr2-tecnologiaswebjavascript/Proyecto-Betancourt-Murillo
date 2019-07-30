/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre : {
      type : 'string'
    },
    usuarios_rol : {
      collection : 'UsuarioRol',
      via : 'rol_FK'
    }

  },

};

