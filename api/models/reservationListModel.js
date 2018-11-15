const reservations =  [
    {
        "id": 1,
        "reservingUser": "John",
        "reservingFrom": "Monday",
        "reservingTo": "Wednesday"
    },
    {
        "id": 2,
        "reservingUser": "Jane",
        "reservingFrom": "Monday",
        "reservingTo": "Wednesday"
    },
];

exports.findAll = async function() {
    return reservations;
};

exports.add = function (record) {
    reservations.push(record)
}
