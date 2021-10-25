const Sequelize = require("sequelize")
const {aplicarRelaciones} = require('./relations')

const sequelize = new Sequelize('user4DB', 'user4', 'root', {
    dialect: 'mysql',
    host: '54.198.161.35',
    define: {
        timestamp: false,
        freezeTableName: true
    }
})


const modelDefiners = []

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

aplicarRelaciones(sequelize)

module.exports = sequelize