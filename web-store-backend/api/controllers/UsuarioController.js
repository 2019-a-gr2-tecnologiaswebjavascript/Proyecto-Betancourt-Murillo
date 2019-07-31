/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    login : async (req, res) => {
        var userNameParam = req.param('userName')
        var passParam = req.param('password')
        if(userNameParam && passParam){
            try {
                var user = await Usuario.find({userName : userNameParam})
                    .populate('user_person_FK')
                    .populate('user_roles')
                    .decrypt()
                if(user){
                    if(user[0].password == passParam){
                        var response = {
                            id : user[0].id,
                            userName : user[0].userName,
                            user_person_FK : user[0].user_person_FK,
                            user_roles : user[0].user_roles
                        }
                        return res.ok(
                            response
                        )
                    }else{
                        return res.serverError(
                            {
                                error: 400,
                                mensaje: 'Credenciales incorrectas'
                            }
                        )
                    }
                }else{
                    return res.serverError(
                        {
                            error : 404,
                            mensaje : 'No existe usuario'
                        }
                    )
                }
            }catch (e){
                return res.serverError(
                    {
                        error : 400,
                        mensaje : 'Usuario inválido'
                    }
                )
            }

        }else{
            return res.badRequest(
                {
                    error: 200,
                    mensaje: 'No envía usuario o contraseña'
                }
            )
        }
    },

    listAll : async (req, res) =>{
        try{
            var users = await Usuario.find()
                .populate('user_roles')
                .populate('user_person_FK')
            var rolesTot = []
            var userToAppend = []
            users.forEach(async singleUser => {
                var roles = await UsuarioRol.find({usuario_FK : singleUser.id})
                    .populate('rol_FK')
                roles.forEach(item => {
                    rolesTot.push(item.rol_FK)
                })
                userToAppend.push({
                    "id" : singleUser.user_person_FK.id,
                    "primerNombre" : singleUser.user_person_FK.primerNombre,
                    "segundoNombre" : singleUser.user_person_FK.segundoNombre,
                    "primerApellido" : singleUser.user_person_FK.primerApellido,
                    "segundoApellido" : singleUser.user_person_FK.segundoApellido,
                    "cedula" : singleUser.user_person_FK.cedula,
                    "telefono" : singleUser.user_person_FK.telefono,
                    "correo" : singleUser.user_person_FK.correo,
                    "usuario" : {
                        "id" : singleUser.id,
                        "userName" : singleUser.userName
                    },
                    "roles" : rolesTot
                })
                rolesTot = []
            });
            setTimeout(function(){
                return res.ok(userToAppend)
            }, 2000)
        }catch{
            return res.serverError()
        }
    }

};

