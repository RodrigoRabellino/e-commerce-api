const {
  createAdmin,
  createCategory,
  createProduct,
  createUser,
} = require("./seederExample");

module.exports = async (generate) => {
  if (generate) {
    try {
      //   createAdmin();
      //   createCategory();
      //   createUser();
      //   createProduct();
    } catch (error) {
      console.log("initialSetup", error);
    }
  }
};
