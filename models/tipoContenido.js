const Sequelize = require('sequelize')
const TipoContenido = (sequelize)=>{
    sequelize.define('tipoContenido',{
        id_cont:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Contenido,
                key: 'id'
            }
        },
        id_tipo:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: LuTipo,
                key: 'id'
            }
        }
    })
}
module.exports = TipoContenido