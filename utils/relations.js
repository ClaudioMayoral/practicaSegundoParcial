function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const playlist = sequelize.models.playlist

    const contenido = sequelize.models.contenido
    const lutipo = sequelize.models.lutipo
    const playlistContenido = sequelize.models.playlistContenido
    const tipoContenido = sequelize.models.tipoContenido

    playlist.belongsToMany(contenido, {through: playlistContenido})
    contenido.belongsToMany(playlist, {through: playlistContenido})
    contenido.belongsToMany(lutipo, {through: tipoContenido})
    lutipo.belongsToMany(contenido, {through: tipoContenido})
}

module.exports = {aplicarRelaciones}