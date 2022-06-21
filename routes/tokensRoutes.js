const tokensRoutes = require("express").Router();
const methodOverride = require("method-override");

tokensRoutes.use(methodOverride("_method"));

tokensRoutes.get("/", (req, res) => {
  res.json("hola desde token");
});

module.exports = tokensRoutes;
