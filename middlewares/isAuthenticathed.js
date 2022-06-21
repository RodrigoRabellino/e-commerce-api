const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const validate = jwt.verify(req.body.token, proccess.env.SECRET_JWT);
  if (validate) return next();
  res.json(404);
};
