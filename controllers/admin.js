const { Admin } = require("../db/models/admin");
// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json(error);
    console.log("error show admin", error);
  }
};

// Display the specified resource.
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json(error);
    console.log("error show admin", error);
  }
};

// Store a newly created resource in storage.
const store = async (req, res) => {
  const password = await Admin.hashPassword(req.body.password);
  const { firstName, lastName, email } = req.body;
  try {
    const admin = Admin.create({ firstName, lastName, email, password });
    res.json(admin);
  } catch (error) {
    console.log("error store admin", error);
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
