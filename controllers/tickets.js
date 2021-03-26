const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  update,
}

function newTicket (req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', {title: 'Add Ticket', flight}); 
  });
}

function create (req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
      res.redirect(`/flights/${flight._id}`);
    }); 
  });
}

function update (req, res) {
  Ticket.findById(req.params.id, function (err, ticket) {
    Object.assign(ticket, req.body);
    ticket.save(function (err) {
      res.redirect(`/flights/${ticket.flight}`)
    })
  })
}

