const modeloPlaylist = require('../../utils/database').models.playlist
const modeloPlaylistContenido = require('../../utils/database').models.playlistContenido 
const mensajes = require('../../utils/exceptions')


exports.getPlaylist = (req, res)=>{
    modeloPlaylist.findAll({
        where:{
            id: req.params.id
        }
    }).then(playlist=>{
        modeloPlaylistContenido.findAll({
            where:{
                id_pl: req.params.id
            }
        }).then(contenido=>{
            res.json({id: playlist[0].id, nombre: playlist[0].nombre, descripcion: playlist[0].descripcion, contenido: contenido})
        }).catch(err=>{
            res.json({estado: mensajes.NotFoundException})
        })
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createPlaylist = (req, res)=>{

    if(typeof req.body.nombre === "string" && typeof req.body.descripcion === "string"){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 15 && req.body.descripcion.length <= 250){
                modeloPlaylist.create({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                }).then(result=>{
                    res.json({
                        estado: mensajes.SuccessCreate
                    })
                })
                .catch((err)=>{
                    console.log(err)
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


exports.updatePlaylist = (req, res)=>{
    if(typeof req.body.nombre === "string" && typeof req.body.descripcion === "string"){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 15 && req.body.descripcion.length <= 250){
                modeloPlaylist.update({
                    nombre: req.body.nombre,
                    informacion: req.body.descripcion,
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


exports.deletePlaylist = (req, res)=>{

    modeloPlaylistContenido.destroy({
        where:{
            id_pl: req.params.id
        }
    }).then(() =>{
        modeloPlaylist.destroy({
            where:{
                id: req.params.id
            } 
         })
         .then(() =>{
             res.json({estado: mensajes.SuccessDelete})
         })
         .catch(err=>{
             res.json({estado: mensajes.NotFoundException})
         })
    })
    .catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
    
}