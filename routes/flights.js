const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET req to add a new flight 
router.get('/new', flightsCtrl.new);
// GET req to index of all movies
router.get('/', flightsCtrl.index);
// GET req to show view of a flight
router.get('/:id', flightsCtrl.show)
// POST req to post the new flight
router.post('/', flightsCtrl.create);

module.exports = router;
