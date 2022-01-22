const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

const isAuth = (req, res, next) => {
  if (!req.headers.token)
    return res.status(401).json({ error: "Token is not defined" });

  const token = req.headers.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token is not defined" });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    user.password = null;
    console.log({ user });
    req.user = user;
    next();
  });
};

module.exports = { createToken, isAuth };
