const { Category } = require("../db/models/category");

// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: "desc" });
    res.json(categories);
  } catch (error) {
    res.json(error);
  }
};

// Display the specified resource.
const show = async (req, res) => {
  const { id } = req.params.id;
  try {
    const category = await Category.findById(id);
    res.json(category);
  } catch (error) {
    res.json(error);
  }
};

// Store a newly created resource in storage.
const store = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.json(category);
  } catch (error) {
    res.json(error);
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
