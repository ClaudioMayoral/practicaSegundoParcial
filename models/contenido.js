const Sequelize = require('sequelize')
const { validate } = require('../utils/database')
const Contenido = (sequelize)=>{
    sequelize.define('contenido', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5, 50]
            }
        },
        informacion:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [10, 250]
            }
        } 
    })
}
module.exports = Contenido