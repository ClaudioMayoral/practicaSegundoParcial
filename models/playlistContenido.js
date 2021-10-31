const Sequelize = require('sequelize')
const PlaylistContenido = (sequelize)=>{
    sequelize.define('playlistContenido', {
        id_pl: {
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        id_ct: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    })
}
module.exports = PlaylistContenido