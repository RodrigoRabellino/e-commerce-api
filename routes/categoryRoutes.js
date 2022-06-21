const categoryRoutes = require("express").Router();
const methodOverride = require("method-override");
const {
  index,
  store,
  destroy,
  show,
  update,
} = require("../controllers/category");
categoryRoutes.use(methodOverride("_method"));

categoryRoutes.get("/", index);
categoryRoutes.post("/", store);
categoryRoutes.put("/", update);
categoryRoutes.delete("/", destroy);

categoryRoutes.get("/:id", show);

module.exports = categoryRoutes;
