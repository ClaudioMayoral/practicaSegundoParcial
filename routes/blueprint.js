//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const playlistController = require('../controllers/blueprint')

//generar las rutas
router.get('/playlist',playlistController.getPlaylist)

router.post('/crearplaylist',playlistController.postCrearPlaylist)

module.exports = router
