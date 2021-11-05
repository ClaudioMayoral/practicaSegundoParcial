//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const contenidoController = require('../../controllers/contenido/blueprint')

//generar las rutas
router.get("/:id", contenidoController.getContenido)

router.post('/crear',contenidoController.createContenido)

router.post('/actualizar/:id',contenidoController.updateContenido)

router.post('/eliminar/:id',contenidoController.deleteContenido)

module.exports = router