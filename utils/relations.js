function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const playlist = sequelize.models.playlist

    const contenido = sequelize.models.contenido
    const lutipo = sequelize.models.lutipo
    const playlistContenido = sequelize.models.playlistContenido
    const tipoContenido = sequelize.models.tipoContenido

    playlist.belongsToMany(contenido, {through: playlistContenido})
    contenido.belongsToMany(playlist, {through: playlistContenido})
}

module.exports = {aplicarRelaciones}