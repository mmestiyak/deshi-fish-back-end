const express = require('express')
const router = express.Router();
const {getFishes, addFish, removeFish} = require('../controllers/fishController')
router.get('/', getFishes);
router.post('/', addFish);
router.delete('/:fishId', removeFish)

module.exports = router;