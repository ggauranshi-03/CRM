const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  order_date: Date,
  products_purchased: [String],
  order_value: Number,
});

module.exports = mongoose.model("Order", orderSchema);
