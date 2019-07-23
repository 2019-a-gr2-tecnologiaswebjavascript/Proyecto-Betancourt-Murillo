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
    }

};

