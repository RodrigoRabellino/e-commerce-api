const adminRoutes = require("./routes/adminRoutes");

module.exports = (app) => {
  app.use("/admin", adminRoutes);
  app.use("/user", (req, res) => {
    res.json("");
  });
  app.use("/product", () => {});
  app.use("/genre", () => {});
  app.use("/tokens", () => {});
};
