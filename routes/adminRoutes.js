const adminRoutes = require("express").Router();
const methodOverride = require("method-override");

adminRoutes.use(methodOverride("_method"));

adminRoutes.get("/", (req, res) => {
  res.json("hola desde admin");
});

module.exports = adminRoutes;
