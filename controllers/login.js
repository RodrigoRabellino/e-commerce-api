const jwt = require("jsonwebtoken");
const { Admin } = require("../db/models/admin");
const { User } = require("../db/models/user");

// Display the specified resource.
const showUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });

    if (!user) return res.json(401);

    const comparePass = await User.comparePassword(password, user.password);

    if (!comparePass) return res.json(401);

    let response = {
      ...user._doc,
      accessToken: makeToken(user.email, user._id, "user"),
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
    console.log("error showUser login", error);
  }
};

const showAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log("admin login");
  try {
    const admin = await Admin.findOne({ email });

    if (!admin) return res.status(401).json("credentials error");

    const comparePass = await Admin.comparePassword(password, admin.password);

    if (!comparePass) return res.status(401).json("credentials error");

    let response = {
      ...admin._doc,
      accessToken: makeToken(admin.email, admin._id, "admin"),
    };
    res.status(200).json(response);
  } catch (error) {
    console.log("error showUser admin", error);
  }
};

// Store a newly created resource in storage.
const store = async (req, res) => {};

const makeToken = (email, id, type) => {
  const secret =
    type === "admin"
      ? process.env.SECRET_JWT_ADMIN
      : process.env.SECRET_JWT_USER;
  return jwt.sign({ email, id, type }, secret);
};

module.exports = {
  showUser,
  showAdmin,
  store,
};
