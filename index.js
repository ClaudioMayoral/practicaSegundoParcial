const path = require("path")
//Importar express
const express = require('express')
//Crear la aplicación web
const app = express()

const playlist = require('./routes/playlist/blueprint')
const contenido = require('./routes/contenido/blueprint')

//Middleware
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use("/playlist",playlist)
app.use("/contenido",contenido)

//Lanzar la aplicación para escuchar peticiones
app.listen(8083, ()=>{
    console.log("Aplicacion Web en linea en el puerto 8083")
})