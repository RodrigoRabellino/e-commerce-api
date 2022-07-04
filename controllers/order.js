const { Order } = require("../db/models/order");

// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .sort({ createdAt: "desc" });
    res.status(201).json(orders);
  } catch (error) {
    res.status(404).json(error.toString());
  }
};

// Display the specified resource.
const show = async (req, res) => {};

// Store a newly created resource in storage.
const store = async (req, res) => {
  const { id: userId } = req.params;
  const {
    firstName,
    lastName,
    address,
    address2,
    city,
    state,
    zip,
    country,
    cart,
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

  const products = cart.map((product) => {
    return { productId: product._id, productQty: product.qty };
  });

  try {
    const order = await Order.create({
      userId,
      shippingDetails,
      products,
      totalPrice,
      status: "confirmed",
    });
    //status confirmed, inTransit,delivered,

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
};

// Update the specified resource in storage.
const update = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(
      id,
      { status: "shipped" },
      { new: true }
    ).populate("userId");
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Remove the specified resource from storage.
const destroy = async (req, res) => {};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
