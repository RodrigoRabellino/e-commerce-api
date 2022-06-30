const { Order } = require("../db/models/order");

// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: "desc" });
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json(error.toString());
  }
};

// Display the specified resource.
const show = async (req, res) => {};

// Store a newly created resource in storage.
const store = async (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    address,
    address2,
    city,
    state,
    zip,
    country,
    products,
    totalPrice,
  } = req.body;

  const shippingDetails = {
    firstName,
    lastName,
    address,
    address2,
    city,
    state,
    zip,
    country,
  };

  try {
    const order = Order.create({
      userId,
      shippingDetails,
      products,
      totalPrice,
      status: "confirmed",
    }); //status confirmed, inTransit,delivered,
    console.log(order);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
};

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
