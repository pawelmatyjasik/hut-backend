let reservations = [
  {
    id: 1,
    reservingUser: "John",
    reservingFrom: "Monday",
    reservingTo: "Wednesday",
    email: "test@domain.com",
    nrOfGuests: 2
  },
  {
    id: 2,
    reservingUser: "Jane",
    reservingFrom: "Monday",
    reservingTo: "Wednesday",
    email: "test2@domain.com",
    nrOfGuests: 4
  }
];

exports.findAll = async function() {
  return reservations;
};

exports.add = function(record) {
  const maxId = reservations
    .map(user => user.id)
    .reduce((acc, next) => (acc > next ? acc : next));

  record.id = maxId + 1;
  reservations.push(record);
};

exports.deleteById = function(idToRemove) {
  reservations = reservations.filter(
    reservation => reservation.id !== idToRemove
  );
};
