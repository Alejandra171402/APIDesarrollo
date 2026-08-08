module.exports = app => {
  const peliculas = require("../controllers/pelicula.controller.js");
  const { verifyToken } = require("../middlewares/authJwt.js");
  var router = require("express").Router();

  // Protegemos creación, actualización y borrado con verifyToken
  router.post("/create/", [verifyToken], peliculas.create);
  router.get("/", peliculas.findAll); // lectura pública, sin token, como ejemplo de ruta mixta
  router.get("/status", peliculas.findAllStatus);
  router.get("/:id", peliculas.findOne);
  router.put("/update/:id", [verifyToken], peliculas.update);
  router.delete("/delete/:id", [verifyToken], peliculas.delete);
  router.delete("/delete/", [verifyToken], peliculas.deleteAll);

  app.use("/api/pelicula", router);
};