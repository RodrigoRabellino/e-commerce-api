const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const validate = jwt.verify(
      req.query.accessToken,
      process.env.SECRET_JWT_ADMIN
    );
    if (validate) return next();
  } catch (error) {
    console.log("error in middleware isAuth", error);
  }
  res.status(401).json("bad credential");
};
