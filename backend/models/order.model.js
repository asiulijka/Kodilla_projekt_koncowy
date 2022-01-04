const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: { type: String, required: true, ref: 'Product' },
  productQty: { type:  Number, required: true },
  productComment: { type: String },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type:  Number, required: true },
  customerMessage: { type: String },
});

module.exports = mongoose.model('Order', orderSchema);