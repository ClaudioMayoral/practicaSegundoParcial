//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const playlistController = require('../../controllers/playlist/blueprint')

//generar las rutas
router.get("/:id",playlistController.getPlaylist)

router.post('/crear',playlistController.createPlaylist)

router.post('/actualizar/:id',playlistController.updatePlaylist)

router.post('/eliminar/:id',playlistController.deletePlaylist)

module.exports = router
