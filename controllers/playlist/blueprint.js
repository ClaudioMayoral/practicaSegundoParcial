const modeloPlaylist = require('../utils/database').models.playlist

exports.getPlaylist = (req, res)=>{
    modeloPlaylist.findAll({
        where:{
            id: req.params.id
        }
    }).then(playlist=>{
        res.json(playlist)
    }).catch(err=>{
        res.json({estado: "error"})
    })
}

exports.createPlaylist = (req, res)=>{
    modeloPlaylist.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
    }).then(result=>{
        res.json({
            estado: "Playlist agregado exitosamente"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}

exports.updatePlaylist = (req, res)=>{
    modeloPlaylist.update({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
    },{
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        res.json({estado:"Playlist actualizada"})
    })
    .catch((err)=>{
        res.json({estado:"ERROR"})
    })
}

exports.deletePlaylist = (req, res)=>{
    res.json({respuesta: "aceptada"})
}