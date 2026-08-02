module.exports = app => {
    const proveedores = require("../controllers/proveedor.controller.js");
    var router = require("express").Router();
    // Create a new Supplier
    router.post("/create/", proveedores.create);
    // Retrieve all Supplier
    router.get("/", proveedores.findAll);
    // Retrieve all active Supplier
    router.get("/status", proveedores.findAllStatus);
    // Retrieve a single Supplier with id
    router.get("/:id", proveedores.findOne);
    // Update a Supplier with id
    router.put("/update/:id", proveedores.update);
    // Delete a Supplier with id
    router.delete("/delete/:id", proveedores.delete);
    // Delete all Suppliers
    router.delete("/delete/", proveedores.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/proveedor/
    app.use("/api/proveedor", router);
};
