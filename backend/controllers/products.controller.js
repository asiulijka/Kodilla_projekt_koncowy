const Product = require('../models/product.model');
const Order = require('../models/order.model');


exports.getMain = async (req, res) => {
  try {
    const result = await Product
    .find();
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const result = await Product
      .findById(req.params.id);
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.postOrder = async (req, res) => {
  try {
    const { 
      cart,
      customerName, 
      customerEmail, 
      customerPhone, 
      customerMessage } = req.body;

    let orders = [];

    for (let product of cart) {
      const newOrder = new Order({
        productId: product._id,
        productQty: product.qty, 
        productComment: product.comment, 
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
        customerMessage: customerMessage
      });

      const savedOrder = await newOrder.save();
      const result = await Order.find({_id: savedOrder.id}).populate('productId');
      orders.push(result);
    }

    res.json({ orders });

  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const result = await Order.find().populate('productId');
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};