const mongoose = require('mongoose')

const fishSchema= mongoose.Schema({
  name: {
    type: String,
    required: "add fish name"
  },
  price: {
    type:Number,
    required: "add price"
  },
  weight: {
    type: Number,
    required: "add weight in gram"
  },
  image: {
    type: String,
    required: "upload image"
  }
})

module.exports = mongoose.model('Fish', fishSchema)