const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET req to show the new ticket creation page
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST req to submit the new ticket data
router.post('/flights/:id', ticketsCtrl.create);
// PUT req to update the new ticket data
router.put('/tickets/:id', ticketsCtrl.update);
// DELETE to delete the ticket 
router.delete('/tickets/:id', ticketsCtrl.delete);

module.exports = router; 