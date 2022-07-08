const {
  createAdmin,
  createCategory,
  createProduct,
  createUser,
} = require("./seederExample");

module.exports = async ({ req, res }) => {
  try {
    //   createAdmin();
    //   createCategory();
    // createUser();
    // createProduct();
    res.json("");
  } catch (error) {
    console.log("initialSetup", error);
    res.json("");
  }
};
