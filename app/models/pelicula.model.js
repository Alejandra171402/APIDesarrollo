//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Pelicula = sequelize.define("pelicula", {
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INT
        },
        tipo_De_Serie: {
            type: Sequelize.STRING
        },
        categoria:{
            type: Sequelize.STRING
        },
        año_de_lanzamiento: {
            type: Sequelize.DATE
        }
    });
    return Pelicula;
};

