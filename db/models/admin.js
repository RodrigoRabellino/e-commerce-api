const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = model("Admin", AdminSchema);

Admin.hashPassword = async (password) => await bcrypt.hash(password, 10);
Admin.comparePassword = async (password, hashedPassword) =>
  await bcrypt.compare(password, hashedPassword);

module.exports = { Admin };
