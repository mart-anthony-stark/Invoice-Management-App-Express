const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(exress.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log(`Server started at port ${port}`);
});
