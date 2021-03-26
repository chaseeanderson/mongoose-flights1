const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create,
  index,
  show
}

function newFlight (req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', {departsDate});
}

function create (req, res) {
  Flight.create(req.body, function (err, flight) {
    if (err) {
      return res.render('flights/new');
    }
    console.log(flight);
    res.redirect('flights');
  });
}

function index(req, res) {
  Flight.find({}).sort({departs: 'asc'}).exec(function(err, flights) {
      res.render('flights', {title: 'All Flights', flights});
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({flight: flight._id}, function (err, tickets) {
      res.render('flights/show', {title: 'Flight Details', flight, tickets});
    });
  });
}