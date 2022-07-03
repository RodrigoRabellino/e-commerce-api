const { User } = require("../db/models/user");
const { Admin } = require("../db/models/admin");
const { Category } = require("../db/models/category");
const { Product } = require("../db/models/product");
const products = require("../products.json");

const createUser = async () => {
  const password = await User.hashPassword("12345678");
  const user = await User.create({
    firstName: "User",
    lastName: "User",
    email: "user@user.com",
    password,
    address: ["Cmno brandi km 34.500"],
    phone: "092561775",
    ordersHistory: [],
  });
  console.log("user created", user);
};

const createAdmin = async () => {
  const password = await Admin.hashPassword("1234");
  const admin = await Admin.create({
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password,
  });
  console.log("admin created", admin);
};

const createCategory = async () => {
  const category = await Category.create([
    { name: "acoustic" },
    { name: "electric" },
    { name: "amplifier" },
    { name: "accesories" },
    { name: "bass" },
    { name: "effects" },
  ]);
  console.log("category created", category);
};

const createProduct = async () => {
  for (const electric of products.electric) {
    let {
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    } = electric;
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    });
    console.log("electric created", product);
  }
  for (const acoustic of products.acoustic) {
    let {
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    } = acoustic;
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    });
    console.log("acoustic created", product);
  }
  for (const amplifier of products.amplifier) {
    let {
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    } = amplifier;
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    });
    console.log("amps created", product);
  }
  for (const accesory of products.accesory) {
    let {
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    } = accesory;
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    });
    console.log("accesories created", product);
  }
  for (const bass of products.bass) {
    let {
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    } = bass;
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    });
    console.log("basses created", product);
  }
  for (const effect of products.effects) {
    let {
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    } = effect;
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      starred,
      slug,
      show,
      createdBy,
    });
    console.log("effects created", product);
  }
};
module.exports = { createAdmin, createCategory, createUser, createProduct };
