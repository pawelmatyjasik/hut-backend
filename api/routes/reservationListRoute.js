"use strict";
module.exports = function(app) {
  var reservationListController = require("../controllers/reservationListController");

  app
    .route("/reservations")
    .get(reservationListController.list_all)
    .post(reservationListController.create);

  app
    .route("/reservations/:reservationId")
    .delete(reservationListController.deleteOne);
};
