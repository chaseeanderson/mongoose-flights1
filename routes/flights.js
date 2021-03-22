const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET req to add a new flight 
router.get('/new', flightsCtrl.new)

module.exports = router;
