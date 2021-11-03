const Sequelize = require('sequelize')
const LuTipo = (sequelize)=>{
    sequelize.define('luTipo', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nombre:{
            type: Sequelize.INTEGER,
            allowNull: false
        } 
    });
}
module.exports = LuTipo