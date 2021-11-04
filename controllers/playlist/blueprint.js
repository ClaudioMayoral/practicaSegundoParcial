const path = require('path')

exports.getPlaylist = (req, res)=>{
    //res.sendfile(path.join(__dirname,'..', 'vi'))
}

exports.createPlaylist = (req, res)=>{
    res.json({respuesta: "aceptada"})
}

exports.updatePlaylist = (req, res)=>{
    //res.sendfile(path.join(__dirname,'..', 'vi'))
}

exports.deletePlaylist = (req, res)=>{
    res.json({respuesta: "aceptada"})
}