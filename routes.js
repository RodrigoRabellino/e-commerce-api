const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const loginRoutes = require("./routes/loginRoutes");
const productRoutes = require("./routes/productRoutes");
const tokensRoutes = require("./routes/tokensRoutes");
const userRoutes = require("./routes/userRoutes");

module.exports = (app) => {
  app.use("/admin", adminRoutes);
  app.use("/user", userRoutes);
  app.use("/product", productRoutes);
  app.use("/category", categoryRoutes);
  app.use("/tokens", tokensRoutes);
  app.use("/login", loginRoutes);
};
