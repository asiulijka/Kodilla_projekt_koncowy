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

// exports.getAll = async (req, res) => {
//   try {
//     const result = await Product.find();
//     if(!result) res.status(404).json({ product: 'Not found' });
//     else res.json(result);
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// };

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
      // name, price, qty, addReq, availability } = req.body;
      productId, qty, addReq } = req.body;

    const newOrder = new Order({
      productId: productId,
      // name: name, 
      // price: price, 
      qty: qty, 
      addReq: addReq
      // availability: availability
    });

    const savedOrder = await newOrder.save();

    const result = await Order.find({_id: savedOrder.id}).populate('productId');

    res.json({ newOrder: result });

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