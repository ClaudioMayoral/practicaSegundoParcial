const modeloContenido = require('../../utils/database').models.contenido
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
    if(req.body.nombre instanceof String && req.body.descripcion instanceof String){
        if(req.body.nombre.length >= 5 && req.body.nombre.length <= 50){
            if(req.body.descripcion.length >= 50 && req.body.descripcion.length <= 250){
                modeloContenido.create({
                    nombre: req.body.nombre,
                    informacion: req.body.descripcion,
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