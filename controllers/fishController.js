const Fish = require('../models/Fish');
exports.getFishes = async (req, res) => {
  try {
    const fishes = await Fish.find({});
    res.send(fishes);
  }catch(err){
    res.status(500).send(err)
  }
}

exports.addFish = async (req, res) => {
    try {
      const fish = await new Fish(req.body).save()
      res.send('fish added successfully')
    }catch(err){
      res.status(500).send(err)
    }
}

exports.removeFish = async (req, res) => {
  try {
    await Fish.remove({_id: req.params.fishId})
    res.send("Deleted Successfully")
  }catch(err){
    res.status(500).send(err)
  }
}