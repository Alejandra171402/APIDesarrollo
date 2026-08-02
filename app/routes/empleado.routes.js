module.exports = app => {
    const empleados = require("../controllers/empleado.controller.js");
    var router = require("express").Router();
    // Create a new Employee
    router.post("/create/", empleados.create);
    // Retrieve all Employee
    router.get("/", empleados.findAll);
    // Retrieve all active Employee
    router.get("/status", empleados.findAllStatus);
    // Retrieve a single Employee with id
    router.get("/:id", empleados.findOne);
    // Update an Employee with id
    router.put("/update/:id", empleados.update);
    // Delete an Employee with id
    router.delete("/delete/:id", empleados.delete);
    // Delete all Employees
    router.delete("/delete/", empleados.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/empleado/
    app.use("/api/empleado", router);
};
