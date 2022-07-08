const { Order } = require("../db/models/order");
const { User } = require("../db/models/user");
const { Product } = require("../db/models/product");

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
  updateProductStock(products);
  try {
    const order = await Order.create({
      userId,
      shippingDetails,
      products,
      totalPrice,
      status: "confirmed",
    });
    //status confirmed, shipped,delivered,
    const user = await User.findById(userId);
    user.ordersHistory.push(order._id);
    user.save();
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

const updateProductStock = async (products) => {
  for (let i = 0; i < products.length; i++) {
    const product = await Product.findById(products[i].productId);
    product.stock = product.stock - products[i].productQty;
    if (product.stock < 1) {
      console.log("------>", product.stock);
      product.starred = false;
      product.show = false;
    }
    product.save();
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
