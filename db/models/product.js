const { Schema, model, Types } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Types.ObjectId,
      ref: "Category",
      required: true,
    },
    starred: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
      ref: "Order",
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

module.exports = { Product };
