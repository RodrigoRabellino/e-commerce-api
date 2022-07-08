const adminRoutes = require("express").Router();
const { index, show, store, update, destroy } = require("../controllers/admin");

adminRoutes.get("/", index);
adminRoutes.post("/", store);
adminRoutes.put("/", update);
adminRoutes.delete("/", destroy);
adminRoutes.get("/:id", show);

module.exports = adminRoutes;
