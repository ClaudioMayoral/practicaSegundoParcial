//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const playlistController = require('../../controllers/playlist/blueprint')

//generar las rutas
router.get(playlistController.getPlaylist)

router.post('/crear',playlistController.createPlaylist)

router.post('/actualizar',playlistController.updatePlaylist)

router.post('/eliminar',playlistController.deletePlaylist)

module.exports = router
