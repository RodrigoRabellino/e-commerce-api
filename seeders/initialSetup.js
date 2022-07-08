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
    createProduct();
    res.json("ta todo piola");
  } catch (error) {
    console.log("initialSetup", error);
    res.json("se kago to");
  }
};
