const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    await new Order(req.body).save();
    res.send('Order Placed Successfully!');
  }catch(err){
    res.status(500).send(err)
  }
}

exports.seeOrders = async (req, res) => {
  try {
    const orders = await Order.find({customerEmail: req.body.customerEmail})
    res.send(orders)
  }catch(err){
    res.send(err)
  }
}