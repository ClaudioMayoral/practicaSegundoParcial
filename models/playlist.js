const Sequelize = require('sequelize')
const Playlist = (sequelize)=>{
    sequelize.define('playlist',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion:Sequelize.STRING
    })
}
module.exports = Playlist