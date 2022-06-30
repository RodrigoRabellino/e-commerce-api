const { User } = require("../db/models/user");

// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: "desc" });
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
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
