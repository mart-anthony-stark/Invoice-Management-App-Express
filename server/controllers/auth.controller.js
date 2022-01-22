const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { createToken } = require("../utils/jwt");

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ err: "User not found" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
      return res.status(401).json({ err: "Passwords do not match" });

    const token = createToken(user);
    res.status(200).json({ success: true, token });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ err: "User already exists" });

    const newUser = new User(req.body);
    const salt = await bcrypt.genSalt(12);
    newUser.password = await bcrypt.hash(req.body.password, salt);

    await newUser.save();
    res.status(200).json({ newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, msg: "Something went wrong" });
  }
};

module.exports = { login, signup };
