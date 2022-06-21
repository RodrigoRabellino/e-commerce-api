const loginRoutes = require("express").Router();
const methodOverride = require("method-override");
const { showUser, showAdmin } = require("../controllers/login");

loginRoutes.post("/user", showUser);
loginRoutes.post("/admin", showAdmin);

module.exports = loginRoutes;
