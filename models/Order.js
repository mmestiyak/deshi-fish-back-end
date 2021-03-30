const mongoose = require('mongoose')

const orderSchema= mongoose.Schema({
  customerEmail: {
    type: String,
    required: "add customer email"
  },
  name: {
    type: String,
    required: "add fishname"
  },
  price: {
    type:Number,
    required: "add price"
  },
  weight: {
    type: Number,
    required: "add weight in gram"
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Order', orderSchema)