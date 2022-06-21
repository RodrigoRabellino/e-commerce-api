const productRoutes = require("express").Router();
const methodOverride = require("method-override");
const {
  index,
  store,
  update,
  destroy,
  show,
} = require("../controllers/product");

productRoutes.use(methodOverride("_method"));

productRoutes.get("/", index);
productRoutes.post("/", store);
productRoutes.put("/", update);
productRoutes.delete("/", destroy);
productRoutes.get("/:id", show);

module.exports = productRoutes;
