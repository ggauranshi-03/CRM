const mongoose = require("mongoose");

const communicationsLogSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  audience_criteria: String,
  message_content: String,
  delivery_status: String,
  delivery_date: Date,
});

module.exports = mongoose.model("CommunicationsLog", communicationsLogSchema);
