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
  const { shippingDetails, cart, totalPrice } = req.body;

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
    //status confirmed, shipped,delivered,
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
};

// Update the specified resource in storage.
const update = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("userId");
    order.status = order.status === "shipped" ? "delivered" : "shipped";
    order.save();
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
