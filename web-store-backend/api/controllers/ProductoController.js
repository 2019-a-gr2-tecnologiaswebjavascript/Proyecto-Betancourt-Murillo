/**
 * ProductoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    upload : (req, res) => {
        const opcionesDeCarga = {
            maxBytes : 10000000,
            dirname : __dirname + '/../../assets/images',
        }
        req.file('imagen')
            .upload(
                opcionesDeCarga,
                (error, archivosSubidos) =>{
                    if(error){
                        return res.serverError({
                            error : 500,
                            mensaje : 'Error subiendo archivo de imagen'
                        })
                    }
                    const noExistenArchivos = archivosSubidos.length === 0
                    if(noExistenArchivos){
                        return res.badRequest({
                            error : 400,
                            mensaje : 'No se subió ningún archivo'
                        })
                    }else {
                        Producto.update(req.param('id'))
                            .set({
                                picFD: archivosSubidos[0].fd
                            }).exec(function (err){
                                if (err) return res.serverError(err);
                                return res.ok();
                              });                          
                    }
                }
            )
    },

    getPic (req, res){
        const opcionesDeDescarga = {
            maxBytes : 10000000,
            dirname : __dirname + '/../../assets/images',
        }
        Producto.findOne(req.param('id')).exec(function (err, museum){
          if (err) return res.serverError(err);
          if (!museum) return res.notFound();
      
          if (!museum.picFD) {
            return res.notFound();
          }
          var SkipperDisk = require('skipper-disk');
          var fileAdapter = SkipperDisk(opcionesDeDescarga);
          // Stream the file down
          fileAdapter.read(museum.picFD)
          .on('error', function (err){
            return res.serverError(err);
          })
          .pipe(res);
        });
      }

};

