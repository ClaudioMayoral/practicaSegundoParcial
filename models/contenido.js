const Sequelize = require('sequelize')
const Contenido = (sequelize)=>{
    sequelize.define('contenido', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        informacion: Sequelize.STRING
    })
}
module.exports = Contenido