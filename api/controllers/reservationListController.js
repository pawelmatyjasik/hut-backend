const reservationsModel = require("../models/reservationListModel");

exports.list_all = function(req, res) {
  res.setHeader("Content-Type", "application/json");
  reservationsModel.findAll().then(result => {
    res.json(result);
  });
};

exports.create = function(req, res) {
  reservationsModel.add(req.body);
  res.setHeader("Content-Type", "application/json");
  res.json({"status": "OK"});
};
