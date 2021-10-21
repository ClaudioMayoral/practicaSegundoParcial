const path = require("path")
//Importar express
const express = require('express')
//Crear la aplicación web
const app = express()

const blueprint = require('./routes/blueprint')

//Middleware
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use(blueprint)

//Lanzar la aplicación para escuchar peticiones
app.listen(8083, ()=>{
    console.log("Aplicacion Web en linea en el puerto 8083")
})