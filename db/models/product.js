const { Schema, model, Types } = require("mongoose");
const slugify = require("slugify");

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
    show: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

ProductSchema.pre("save", function (next) {
  this.slug = slugify(this.name, {
    replacement: "_",
    lower: true,
  });
  next();
});

const Product = model("Product", ProductSchema);

module.exports = { Product };
