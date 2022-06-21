const { Order } = require("../db/models/order");

// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: "desc" });
    res.json(orders);
  } catch (error) {
    res.json(error.toString());
  }
};

// Display the specified resource.
const show = async (req, res) => {};

// Store a newly created resource in storage.
const store = async (req, res) => {};

// Update the specified resource in storage.
const update = async (req, res) => {};

// Remove the specified resource from storage.
const destroy = async (req, res) => {};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
