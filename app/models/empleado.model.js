//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "empleado"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad
    const Empleado = sequelize.define("empleado", {
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        puesto: {
            type: Sequelize.STRING
        },
        salario: {
            type: Sequelize.DECIMAL
        },
        ingreso: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.BOOLEAN
        },
    });
    return Empleado;
};
