const path = require("path")
//Importar express
const express = require('express')
//Crear la aplicación web
const app = express()

const sequelize = require('./utils/database')
const playlist = require('./routes/playlist/blueprint')
const contenido = require('./routes/contenido/blueprint')

//Middleware
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use("/playlist",playlist)
app.use("/contenido",contenido)

//Lanzar la aplicación para escuchar peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8083,()=>{
            console.log("Aplicación web en línea en el puerto 8083")
    })
    })
    .catch(err=>console.log(err))