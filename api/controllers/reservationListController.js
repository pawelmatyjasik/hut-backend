const reservationsModel = require("../models/reservationListModel");

const list_all = function(req, res) {
  res.setHeader("Content-Type", "application/json");
  reservationsModel.findAll().then(result => {
    res.json(result);
  });
};

const create = function(req, res) {
  reservationsModel.add(req.body);
  res.setHeader("Content-Type", "application/json");
  res.status(201);
  res.json({ status: "OK" });
};

const deleteOne = function(req, res) {
  reservationsModel.deleteById(parseInt(req.params.reservationId));
  res.setHeader("Content-Type", "application/json");
  res.status(204);
  res.json({ status: "OK" });
};

const withContentTypeJson = function(controllerFunct) {
  return function(req, res) {
    res.setHeader("Content-Type", "application/json");

    return controllerFunct(req, res);
  };
};

exports.list_all = withContentTypeJson(list_all);
exports.create = withContentTypeJson(create);
exports.deleteOne = withContentTypeJson(deleteOne);
