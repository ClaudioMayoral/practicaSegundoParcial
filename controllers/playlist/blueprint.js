const modeloPlaylist = require('../../utils/database').models.playlist
const mensajes = require('../../utils/exceptions')


exports.getPlaylist = (req, res)=>{
    modeloPlaylist.findAll({
        where:{
            id: req.params.id
        }
    }).then(playlist=>{
        res.json(playlist)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException.mensaje})
    })
}


exports.createPlaylist = (req, res)=>{
    if(req.body.nombre instanceof String && req.body.descripcion instanceof String){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 50 && req.body.descripcion.length <= 250){
                modeloPlaylist.create({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                }).then(result=>{
                    res.json({
                        estado: mensajes.SuccessCreate.mensaje
                    })
                })
                .catch((err)=>{
                    console.log(err)
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


exports.updatePlaylist = (req, res)=>{
    if(req.body.nombre instanceof String && req.body.descripcion instanceof String){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 50 && req.body.descripcion.length <= 250){
                modeloPlaylist.update({
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


exports.deletePlaylist = (req, res)=>{
    modeloPlaylist.destroy({
        where:{
            id: req.params.id
        } 
     })
     .then(() =>{
         res.json({estado: "Playlist eliminada"})
     })
     .catch(err=>{
         res.json({estado: "error"})
     })
}