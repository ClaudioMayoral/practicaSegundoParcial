const Sequelize = require("sequelize")

const sequelize = new Sequelize('user4DB', 'user4', 'root', {
    dialect: 'mysql',
    host: '54.198.161.35',
    define: {
        timestamp: false,
        freezeTableName: true
    }
})


const modelDefiners = [
    require("../models/contenido"),
    require("../models/luTipo"),
    require("../models/playlist"),
    require("../models/playlistContenido"),
    require("../models/tipoContenido")
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

module.exports = sequelize