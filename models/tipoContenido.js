const Sequelize = require('sequelize')
const TipoContenido = (sequelize)=>{
    sequelize.define('tipoContenido',{
        id_cont:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        id_tipo:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    })
}
module.exports = TipoContenido