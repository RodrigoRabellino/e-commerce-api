const productRoutes = require("express").Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");

const methodOverride = require("method-override");
const {
  index,
  indexStarred,
  indexCategory,
  show,
  store,
  update,
  destroy,
  showBySlug,
  updateShow,
  updateStarred,
  indexAll,
} = require("../controllers/product");

productRoutes.use(methodOverride("_method"));

productRoutes.get("/", index);
productRoutes.get("/starred", indexStarred);
productRoutes.get("/all", isAuthenticated, indexAll);
productRoutes.get("/category/:categoryName", indexCategory);
productRoutes.post("/", isAuthenticated, store);
productRoutes.put("/:id", isAuthenticated, update);

productRoutes.put("/starred/:id", isAuthenticated, updateStarred);
productRoutes.delete("/:id", isAuthenticated, updateShow);

productRoutes.get("/:id", show);
productRoutes.get("/slug/:slug", showBySlug);

module.exports = productRoutes;
