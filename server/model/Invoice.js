const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  start_date: { type: Date, default: new Date().toISOString() },
  due: { type: Date },
  payment_terms: { type: Number },
  product_desc: { type: String },
  Items: { type: Array },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
