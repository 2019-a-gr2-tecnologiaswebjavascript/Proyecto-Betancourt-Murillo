/**
 * Persona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    primerNombre : {
      type : 'string',
      minLength : 3,
      maxLength : 45,
      required : true
    },
    segundoNombre : {
      type : 'string',
      minLength : 3,
      maxLength : 45
    },
    primerApellido : {
      type : 'string',
      minLength : 3,
      maxLength : 45,
      required : true
    },
    segundoApellido : {
      type : 'string',
      minLength : 3,
      maxLength : 45
    },
    cedula : {
      type : 'string',
      minLength : 8,
      maxLength : 15,
      required : true,
      unique : true,
      regex : /^[0-9]*$/gm
    },
    telefono : {
      type : 'string',
      regex : /^[0-9]*$/gm
    },
    correo : {
      type : 'string',
      unique : true,
      required : true,
      isEmail : true
    },
    persona_usuario_FK : {
      model : 'Usuario'
    }

  },

};

