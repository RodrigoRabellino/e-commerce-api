const orderRoutes = require("express").Router();
const { index, show, store, update, destroy } = require("../controllers/order");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");
const methodOverride = require("method-override");
orderRoutes.use(methodOverride("_method"));

orderRoutes.get("/", isAuthenticated, index);
orderRoutes.post("/:id", isUserAuthenticated, store);
orderRoutes.put("/", isUserAuthenticated, update);
// orderRoutes.delete("/", destroy);
orderRoutes.get("/:id", isUserAuthenticated, show);

module.exports = orderRoutes;
