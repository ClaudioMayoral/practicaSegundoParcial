const modeloContenido = require('../../utils/database').models.contenido


exports.getContenido = (req, res)=>{
    modeloContenido.findAll({
        where:{
            id: req.params.id
        }
    }).then(contenido=>{
        res.json(contenido)
    }).catch(err=>{
        res.json({estado: "error"})
    })
}


exports.createContenido = (req, res)=>{
    modeloContenido.create({
        nombre: req.body.nombre,
        informacion: req.body.descripcion,
    }).then(result=>{
        res.json({
            estado: "Contenido agregado exitosamente"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}


exports.updateContenido = (req, res)=>{
    modeloContenido.update({
        nombre: req.body.nombre,
        informacion: req.body.descripcion,
    },{
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        res.json({estado:"Contenido actualizado"})
    })
    .catch((err)=>{
        res.json({estado:"ERROR"})
    })
}


exports.deleteContenido = (req, res)=>{
    modeloContenido.destroy({
        where:{
            id: req.params.id
        } 
     })
     .then(() =>{
         res.json({estado: "Contenido eliminado"})
     })
     .catch(err=>{
         res.json({estado: "error"})
     })
}