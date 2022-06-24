const productRoutes = require("express").Router();
const methodOverride = require("method-override");
const {
  index,
  indexStarred,
  show,
  store,
  update,
  destroy,
  showBySlug,
} = require("../controllers/product");

productRoutes.use(methodOverride("_method"));

productRoutes.get("/", index);
productRoutes.get("/starred", indexStarred);
productRoutes.post("/", store);
productRoutes.put("/", update);
productRoutes.delete("/", destroy);

productRoutes.get("/:id", show);
productRoutes.get("/slug/:slug", showBySlug);

module.exports = productRoutes;
