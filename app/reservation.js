"use strict";
var Reservation = (function () {
    function Reservation(reservationDate, name, email, mobile, remarks) {
        this.reservationDate = reservationDate;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.remarks = remarks;
    }
    return Reservation;
}());
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.js.map