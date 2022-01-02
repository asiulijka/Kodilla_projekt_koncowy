const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: { type: String, required: true, ref: 'Product' },
  // name: { type: String, required: true },
  // price: { type: Number, required: true },
  productQty: { type:  Number, required: true },
  productComment: { type: String },
  // description: { type: String, required: true },
  // category: { type: String, required: true },
  // dimentions: { type: String, required: true },
  // colours: { type: String, required: true },
  // decoration: { type: String, required: true },
  // availability: { type: String, required: true },
  // img1: { type: String, required: true },
  // img2: { type: String },
  // img3: { type: String },
  // img4: { type: String },
  // img5: { type: String },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type:  Number, required: true },
  customerMessage: { type: String },
});

module.exports = mongoose.model('Order', orderSchema);