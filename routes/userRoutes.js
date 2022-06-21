const userRoutes = require("express").Router();
const methodOverride = require("method-override");
userRoutes.use(methodOverride("_method"));
const { index, store } = require("../controllers/user");

userRoutes.get("/", index);
userRoutes.post("/", store);

module.exports = userRoutes;
