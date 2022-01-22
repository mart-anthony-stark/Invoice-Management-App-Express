const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config({});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log(`Server started at port ${port}`);
});
console.log(process.env.DB_URI);
