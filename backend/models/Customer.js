const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone_number: String,
  total_spends: Number,
  visit_count: Number,
  last_visit_date: Date,
});

module.exports = mongoose.model("Customer", customerSchema);
