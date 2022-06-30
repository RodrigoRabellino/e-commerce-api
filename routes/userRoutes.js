const userRoutes = require("express").Router();
const methodOverride = require("method-override");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { index, show, store, update, destroy } = require("../controllers/user");
userRoutes.use(methodOverride("_method"));

userRoutes.get("/", isAuthenticated, index);
userRoutes.post("/", store);
userRoutes.put("/", update);
userRoutes.delete("/", destroy);
userRoutes.get("/:id", show);

module.exports = userRoutes;
