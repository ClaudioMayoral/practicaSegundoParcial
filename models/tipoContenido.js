const Sequelize = require('sequelize')

const TipoContenido = (sequelize)=>{
    sequelize.define('tipoContenido',{
        id_cont:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'contenido',
                key: 'id'
            }
        },
        id_tipo:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'luTipo',
                key: 'id'
            }
        }
    })
}
module.exports = TipoContenido