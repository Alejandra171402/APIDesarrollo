module.exports = app => {
    const productos = require("../controllers/producto.controller.js");
    var router = require("express").Router();
    // Create a new Product
    router.post("/create/", productos.create);
    // Retrieve all Product
    router.get("/", productos.findAll);
    // Retrieve all published Product
    router.get("/status", productos.findAllStatus);
    // Retrieve a single Product with id
    router.get("/:id", productos.findOne);
    // Update a Product with id
    router.put("/update/:id", productos.update);
    // Delete a Product with id
    router.delete("/delete/:id", productos.delete);
    // Delete all Producte
    router.delete("/delete/", productos.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/producto/
    app.use("/api/producto", router);
};