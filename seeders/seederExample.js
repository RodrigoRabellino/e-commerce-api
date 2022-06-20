const { User } = require("../db/models/user");
const { Admin } = require("../db/models/admin");
const { Category } = require("../db/models/category");
const { Product } = require("../db/models/product");

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
  const category = await Category.create({
    name: "guitar",
  });
  console.log("category created", category);
};
const createProduct = async () => {
  const product = await Product.create({
    name: "Guitar LesPaul Relique",
    description:
      "The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life.",
    imgUrl: [
      "https://static.gibson.com/product-images/USA/USAUBC849/Tobacco%20Burst/hardware-500_500.png",
      "https://static.gibson.com/product-images/USA/USAUBC849/Tobacco Burst/front-300_600.png",
    ],
    price: 1500,
    stock: 5,
    categoryId: "62b10046f3d5c27377f6204b",
    starred: false,
    slug: "les-paul-relique",
    createdBy: "62b10046f3d5c27377f6204d",
  });
  console.log("category created", product);
};
module.exports = { createAdmin, createCategory, createUser, createProduct };
