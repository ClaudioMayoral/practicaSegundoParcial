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
        modeloPlaylistContenido.findAll({
            where:{
                id_ct: req.params.id
            }
        }).then(playlist=>{
            modeloTipoContenido.findAll({
                where:{
                    id_cont: req.params.id
                }
            }).then(tipo=>{
                res.json({id: contenido[0].id, nombre: contenido[0].nombre, informacion: contenido[0].informacion, playlist: playlist[0].id_pl, tipo: tipo[0].id_tipo})
            }).catch(err=>{
                res.json({estado: mensajes.NotFoundException})
            })

            
        }).catch(err=>{
            res.json({estado: mensajes.NotFoundException})
        })
        
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createContenido = (req, res)=>{
    if(typeof req.body.nombre === "string" && typeof req.body.informacion === "string" && typeof req.body.tipo === "string"){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.informacion.length >= 15 && req.body.informacion.length <= 250){
                if(req.body.tipo == "Pelicula" || req.body.tipo == "Libro"){
                    const tipoId = req.body.tipo == "Pelicula" ? 1 : 2

                    modeloContenido.create({
                        nombre: req.body.nombre,
                        informacion: req.body.informacion,
                    }).then(result=>{
                            modeloPlaylistContenido.create({
                                id_pl: req.body.playlistId,
                                id_ct: result.id,
                            }).then(()=>{

                                modeloTipoContenido.create({
                                    id_cont: result.id,
                                    id_tipo: tipoId,
                                }).then(()=>{
                                    res.json({
                                        estado: mensajes.SuccessCreate
                                    })
                                
                                })
                                .catch((err)=>{
                                    res.json({estado: mensajes.NotFoundException})
                                })
                            })
                            .catch((err)=>{
                                res.json({estado: mensajes.NotFoundException})
                            })

                        })
                    .catch((err)=>{
                        console.log(err)
                        res.json({estado: mensajes.NotFoundException})
                    })
                    modeloPlaylistContenido.create({
                    })
                }else{
                    res.json({estado: mensajes.NotFoundException})
                }
            }else{
                res.json({estado: mensajes.InvalidDescriptionException})
            }
        }else{
            res.json({estado: mensajes.InvalidTitleException})
        }
    }else{
        res.json({estado: mensajes.InvalidTypeException})
    }
}


exports.updateContenido = (req, res)=>{
    if(typeof req.body.nombre === "string" && typeof req.body.informacion === "string"){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.informacion.length >= 15 && req.body.informacion.length <= 250){
                modeloContenido.update({
                    nombre: req.body.nombre,
                    informacion: req.body.informacion,
                },{
                    where:{
                        id: req.params.id
                    }
                })
                .then(()=>{
                    res.json({estado:mensajes.SuccessUpdate})
                })
                .catch((err)=>{
                    res.json({estado: mensajes.NotFoundException})
                })
            }else{
                res.json({estado: mensajes.InvalidDescriptionException})
                throw mensajes.InvalidDescriptionException
            }
        }else{
            res.json({estado: mensajes.InvalidTitleException})
            throw mensajes.InvalidTitleException
        }
    }else{
        res.json({estado: mensajes.InvalidTypeException})
    }
}


exports.deleteContenido = (req, res)=>{
    modeloPlaylistContenido.destroy({
        where:{
            id_ct: req.params.id,
        } 
     })
     .then(() =>{
        modeloTipoContenido.destroy({
            where:{
                id_cont: req.params.id
            }
        }).then(() =>{
            modeloTipoContenido.destroy({
                where:{
                    id_cont: req.params.id
                }
            }).then(() =>{
                res.json({estado: mensajes.SuccessDelete})
            }).catch(err=>{
                res.json({estado: mensajes.NotFoundException})
            }) 
        }).catch(err=>{
            res.json({estado: mensajes.NotFoundException})
        }) 
     })
     .catch(err=>{
         res.json({estado: mensajes.NotFoundException})
     })
}