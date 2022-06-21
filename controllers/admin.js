const { Admin } = require("../db/models/admin");
// Display a listing of the resource.
async function index(req, res) {
  try {
    const admins = Admin.find();
    res.json(admins);
  } catch (error) {
    console.log("error show admin", error);
  }
}

// Display the specified resource.
async function show(req, res) {
  const { id } = req.params;
  try {
    const admin = Admin.findById(id);
    res.json(admin);
  } catch (error) {
    console.log("error show admin", error);
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  const password = Admin.hashPassword(req.body.password);
  const { firstName, lastName, email } = req.body;
  try {
    const admin = Admin.create({ firstName, lastName, email, password });
    res.json(admin);
  } catch (error) {
    console.log("error store admin", error);
  }
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
