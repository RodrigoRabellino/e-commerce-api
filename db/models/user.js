const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
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
    address: [
      {
        type: String,
      },
    ],
    phone: {
      type: String,
    },
    ordersHistory: [
      {
        type: Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

User.hashPassword = async (password) => await bcrypt.hash(password, 10);
User.comparePassword = async (password, hashedPassword) =>
  await bcrypt.compare(password, hashedPassword);

module.exports = { User };
