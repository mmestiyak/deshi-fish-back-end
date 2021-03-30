const express = require('express')
const router = express.Router();
const {placeOrder, seeOrders} = require('../controllers/orderController')

router.post('/', placeOrder);
router.post('/my-orders', seeOrders)

module.exports = router;