const Sequelize = require('sequelize')

const PlaylistContenido = (sequelize)=>{
    sequelize.define('playlistContenido', {
        id_pl: {
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
            references: {
                model: 'playlist',
                key: 'id'
            }
        },
        id_ct: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: 'contenido',
                key: 'id'
            }
        }
    })
}
module.exports = PlaylistContenido