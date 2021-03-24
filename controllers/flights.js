const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create,
  index,
  show
}

function newFlight (req, res) {
  res.render ('flights/new');
}

function create (req, res) {
  Flight.create(req.body, function (err, flight) {
    if (err) {
      // TODO
      // alert('Please enter valid values!');
      return res.render('flights/new');
    }
    console.log(flight);
    res.redirect('flights');
  });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {title: 'All Flights', flights});
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({flight: flight._id}, function (err, tickets) {
      res.render('flights/show', {title: 'Flight Details', flight, tickets});
    });
  });
}