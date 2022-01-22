const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { isAuth } = require("./utils/jwt");

const port = process.env.PORT || 3000;
require("dotenv").config({});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", isAuth, (req, res) => {
  res.send(req.user);
});
app.use("/auth", require("./routes/auth.route"));

app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log(`Server started at port ${port}`);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => console.log(e));
});
