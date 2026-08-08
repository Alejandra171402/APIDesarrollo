module.exports = app => {
  const sucursals = require("../controllers/sucursal.controller.js");
  const { verifyToken } = require("../middlewares/authJwt.js");
  var router = require("express").Router();

  // Protegemos creación, actualización y borrado con verifyToken
  router.post("/create/", [verifyToken], sucursals.create);
  router.get("/", sucursals.findAll); // lectura pública, sin token, como ejemplo de ruta mixta
  router.get("/status", sucursals.findAllStatus);
  router.get("/:id", sucursals.findOne);
  router.put("/update/:id", [verifyToken], sucursals.update);
  router.delete("/delete/:id", [verifyToken], sucursals.delete);
  router.delete("/delete/", [verifyToken], sucursals.deleteAll);

  app.use("/api/customer", router);
};