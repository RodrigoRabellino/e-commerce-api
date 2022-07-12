const userRoutes = require("express").Router();
const methodOverride = require("method-override");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { index, show, store, update, destroy } = require("../controllers/user");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");
userRoutes.use(methodOverride("_method"));

userRoutes.get("/", isAuthenticated, index);
userRoutes.post("/", store);
userRoutes.patch("/:id", update);
userRoutes.delete("/", destroy);
userRoutes.get("/:id", isUserAuthenticated, show);

module.exports = userRoutes;
