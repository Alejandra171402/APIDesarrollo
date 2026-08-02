// importamos db los modelos en este caso si tenemos uno o mas, se puede referenciar db."nombreModelo".
const db = require("../models");
const Proveedor = db.proveedores;
const Op = db.Sequelize.Op;

// Create and Save a new Supplier
exports.create = (req, res) => {
    // Validamos que dentro del  request no venga vacio el nombre, de lo contrario returna error
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Supplier, definiendo una variable con la estructura del reques para luego solo ser enviada como parametro mas adelante.
    const proveedor = {
        nombre: req.body.nombre,
        contacto: req.body.contacto,
        direccion: req.body.direccion,
        correo: req.body.correo,
        telefono: req.body.telefono,
        ingreso: req.body.ingreso,
        estado: req.body.estado ? req.body.estado : false
    };

    // Save a new Supplier into the database
    Proveedor.create(proveedor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Supplier."
            });
        });
};

// Retrieve all Supplier from the database.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Proveedor.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving suppliers."
            });
        });
};

// Find a single Supplier with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Proveedor.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Proveedor with id=" + id
            });
        });
};

// Update a Supplier by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Proveedor.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Proveedor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Supplier with id=${id}. Maybe Supplier was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Supplier with id=" + id
            });
        });
};

// Delete a Supplier with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    // utilizamos el metodo destroy para eliminar el objeto mandamos la condicionante where id = parametro que recibimos
    Proveedor.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Supplier was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Supplier with id=${id}. El proveedor no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Supplier with id=" + id
            });
        });
};

// Delete all Suppliers from the database.
exports.deleteAll = (req, res) => {
    Proveedor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Suppliers were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all suppliers."
            });
        });
};

// find all active Supplier, basado en el atributo estado vamos a buscar que solo los proveedores activos
exports.findAllStatus = (req, res) => {
    Proveedor.findAll({ where: { estado: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Supplier."
            });
        });
};
