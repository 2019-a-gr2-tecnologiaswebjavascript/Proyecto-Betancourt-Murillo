/**
 * UsuarioRol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    rol_FK : {
      model : 'Rol'
    },
    usuario_FK : {
      model : 'Usuario'
    }

  },

};

