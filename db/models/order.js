const { Schema, model, Types } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingDetails: {
      type: {},
      required: true,
    },
    products: [
      {
        productId: { type: Types.ObjectId, ref: "Product", required: true },
        productQty: { type: Number, required: true },
      },
    ],
    totalPrice: {
      type: Number,
      require: true,
    },
    status: {
      type: "String",
      require: true,
    },
  },
  { timestamps: true }
);

const Order = model("Order", OrderSchema);

module.exports = { Order };
