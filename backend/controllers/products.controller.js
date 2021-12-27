const Product = require('../models/product.model');
const Order = require('../models/order.model');


exports.getMain = async (req, res) => {
  try {
    const result = await Product
    .find()
    .select('name price img1');
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
      name, price, qty, addReq, availability } = req.body;

    const newOrder = new Order({
      name: name, 
      price: price, 
      qty: qty, 
      addReq: addReq, 
      availability: availability
    });

    const savedOrder = await newOrder.save();

    res.json({ newOrder: savedOrder });

  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const result = await Order.find();
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};