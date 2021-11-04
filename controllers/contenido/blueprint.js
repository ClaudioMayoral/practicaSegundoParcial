const path = require('path')

exports.getContenido = (req, res)=>{
    //res.sendfile(path.join(__dirname,'..', 'vi'))
}

exports.createContenido = (req, res)=>{
    res.json({respuesta: "aceptada"})
}

exports.updateContenido = (req, res)=>{
    res.json({respuesta: "aceptada"})
}

exports.deleteContenido = (req, res)=>{
    res.json({respuesta: "aceptada"})
}