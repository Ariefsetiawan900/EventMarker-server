const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  participant: {
    type: [String],
    required: true,
  },
  note: {
    // min:[50,'min 50 characters'],
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Item", itemSchema);
