const adminRoutes = require("express").Router();
const methodOverride = require("method-override");

adminRoutes.use(methodOverride("_method"));
