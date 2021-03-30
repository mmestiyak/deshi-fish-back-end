const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();

// SETTING UP MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors())

// IMPORTING ROUTES 
const fishesRoute = require('./routes/fishes') 
const ordersRoute = require('./routes/orders') 

// HANDLING ROUTES
app.use('/fishes', fishesRoute);
app.use('/orders',ordersRoute) 



require('dotenv').config() // importing all variables inside .env file into process.env object as property

// CONNECTING TO DATABASE
mongoose.connect(process.env.DATABASE,
   {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
    if(err) console.log(`DATABASE FAILED TO CONNECT! 🐛 ${err}`)
    console.log(`🤩 database connected successfully!`)
})

// STARTING OUT SERVER
app.listen(process.env.PORT || 7777, (err) => { 
  if(err) console.log(`SERVER FAILED TO RUN 🐛 ${err}`)
  console.log(`😎 server running successfully!`)
})