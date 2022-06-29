const { User } = require("../db/models/user");
const { Admin } = require("../db/models/admin");
const { Category } = require("../db/models/category");
const { Product } = require("../db/models/product");
const products = require("../products.json");

const createUser = async () => {
  const password = await User.hashPassword("1234");
  const user = await User.create({
    firstName: "Rodrigo",
    lastName: "Rabellino",
    email: "rorabe93@gmail.com",
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
    { name: "guitar" },
    { name: "amplifier" },
    { name: "accesories" },
  ]);
  console.log("category created", category);
};

const createProduct = async () => {
  for (const guitar of products.guitar) {
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
    } = guitar;
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
    console.log("guitars created", product);
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
};
module.exports = { createAdmin, createCategory, createUser, createProduct };
