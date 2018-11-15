"use strict";
module.exports = function(app) {
  var reservationListController = require("../controllers/reservationListController");

  app
    .route("/reservations")
    .get(reservationListController.list_all)
    .post(reservationListController.create);

//   app
//     .route("/reservations/:reservationId")
//     .get(reservationListController.getOne)
//     .put(reservationListController.update)
//     .delete(reservationListController.delete);
};
