const modeloContenido = require('../../utils/database').models.contenido
const modeloPlaylistContenido = require('../../utils/database').models.playlistContenido 
const modeloTipoContenido = require('../../utils/database').models.tipoContenido
const mensajes = require('../../utils/exceptions')


exports.getContenido = (req, res)=>{
    modeloContenido.findAll({
        where:{
            id: req.params.id
        }
    }).then(contenido=>{
        res.json(contenido)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException.mensaje})
    })
}


exports.createContenido = (req, res)=>{
    if(req.body.nombre instanceof String && req.body.descripcion instanceof String && req.body.tipo instanceof String){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 50 && req.body.descripcion.length <= 250){
                if(req.body.tipo == "Pelicula" || req.body.tipo == "Libro"){
                    const tipoId = req.body.tipo == "Pelicula" ? 0 : 1
                    modeloContenido.create({
                        nombre: req.body.nombre,
                        informacion: req.body.descripcion,
                    }).then(result=>{

                        modeloTipoContenido.create({
                            id_cont: result.id,
                            id_tipo: tipoId,
                        }).then(()=>{

                        })
                        .catch((err)=>{
                            res.json({estado: mensajes.Forbiden.codigo})
                        })

                        modeloPlaylistContenido.create({
                            id_pl: req.body.playlistId,
                            id_ct: result.id,
                        }).then(()=>{
                            res.json({
                                estado: mensajes.SuccessCreate.mensaje
                            })
                        })
                        .catch((err)=>{
                            res.json({estado: mensajes.Forbiden.codigo})
                        })


                    })
                    .catch((err)=>{
                        console.log(err)
                        res.json({estado: mensajes.NotFoundException.mensaje})
                    })
                    modeloPlaylistContenido.create({
                    })
                }else{
                    throw mensajes.NotFoundException
                }
            }else{
                throw mensajes.InvalidDescriptionException
            }
        }else{
            throw mensajes.InvalidTitleException
        }
    }
}


exports.updateContenido = (req, res)=>{
    if(req.body.nombre instanceof String && req.body.descripcion instanceof String){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 50 && req.body.descripcion.length <= 250){
                    modeloContenido.update({
                        nombre: req.body.nombre,
                        informacion: req.body.descripcion,
                    },{
                        where:{
                            id: req.params.id
                        }
                    })
                    .then(()=>{
                        res.json({estado:mensajes.SuccessUpdate.mensaje})
                    })
                    .catch((err)=>{
                        res.json({estado: mensajes.NotFoundException.mensaje})
                    })
            }else{
                throw mensajes.InvalidDescriptionException
            }
        }else{
            throw mensajes.InvalidTitleException
        }
    }
}


exports.deleteContenido = (req, res)=>{
    modeloContenido.destroy({
        where:{
            id: req.params.id
        } 
     })
     .then(() =>{
         res.json({estado: mensajes.SuccessDelete.mensaje})
     })
     .catch(err=>{
         res.json({estado: mensajes.NotFoundException.mensaje})
     })
}