const Sequelize = require('sequelize')

const Playlist = (sequelize)=>{
    sequelize.define('playlist',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5, 50]
            }
        },
        descripcion:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [10, 250]
            }
        }
    })
}
module.exports = Playlist