const productRoutes = require("express").Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const methodOverride = require("method-override");
const {
  index,
  indexStarred,
  show,
  store,
  update,
  destroy,
  showBySlug,
  updateShow,
  indexAll,
} = require("../controllers/product");

productRoutes.use(methodOverride("_method"));

productRoutes.get("/", index);
productRoutes.get("/starred", indexStarred);
productRoutes.get("/all", isAuthenticated, indexAll);
productRoutes.post("/", isAuthenticated, store);
productRoutes.put("/", isAuthenticated, update);
productRoutes.delete("/", isAuthenticated, updateShow);

productRoutes.get("/:id", show);
productRoutes.get("/slug/:slug", showBySlug);

module.exports = productRoutes;
