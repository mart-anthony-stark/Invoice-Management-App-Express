const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

const isAuth = (req, res, next) => {
  if (!req.headers.token)
    return res.status(401).json({ error: "Unauthorized" });

  const token = req.headers.token.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) return res.status(401).json({ error: "Unauthorized" });

    decodedToken.user.password = undefined;
    req.user = decodedToken.user;
    next();
  });
};

module.exports = { createToken, isAuth };
