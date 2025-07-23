const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  organicCert: String,
  available: Boolean,
  imageUrl: String,
});
module.exports = mongoose.model('Product', ProductSchema);