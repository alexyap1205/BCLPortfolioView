"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alexy on 20/11/2016.
 */
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var reservation_1 = require('./reservation');
var dates_service_1 = require('./dates.service');
var ReservationComponent = (function () {
    function ReservationComponent(config, dateService) {
        var _this = this;
        this.dateService = dateService;
        this.submitted = false;
        var initialDate = new Date();
        initialDate.setDate(initialDate.getDate() + 3);
        this.initializeBlockedDates(initialDate);
        config.minDate = { year: initialDate.getFullYear(), month: initialDate.getMonth() + 1, day: 1 };
        var maxYear = initialDate.getFullYear();
        var maxMonth = initialDate.getMonth() + 1;
        if (maxMonth == 12) {
            maxYear = maxYear + 1;
            maxMonth = 3;
        }
        config.maxDate = { year: maxYear, month: maxMonth, day: initialDate.getDate() };
        do {
            initialDate.setDate(initialDate.getDate() + 1);
        } while ((!this.isValidDate(initialDate)));
        this.model = new reservation_1.Reservation({ year: initialDate.getFullYear(), month: initialDate.getMonth() + 1, day: initialDate.getDate() }, "", "", "", "");
        // weekends are disabled
        config.markDisabled = function (date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return !_this.isValidDate(d);
        };
    }
    ReservationComponent.prototype.initializeBlockedDates = function (date) {
        var _this = this;
        this.dateService.getBlockDates(date)
            .then(function (dates) {
            _this.blockedDates = dates;
        });
        this.currentMonth = date;
    };
    ReservationComponent.prototype.isValidDate = function (date) {
        var isValid = true;
        var initialDate = new Date();
        initialDate.setDate(initialDate.getDate() + 3);
        if (date.getDay() == 0) {
            isValid = false;
        }
        else if (date.getTime() < initialDate.getTime()) {
            isValid = false;
        }
        else if (this.blockedDates != undefined) {
            for (var _i = 0, _a = this.blockedDates; _i < _a.length; _i++) {
                var blockedDate = _a[_i];
                if (blockedDate.getFullYear() == date.getFullYear() &&
                    blockedDate.getMonth() == date.getMonth() &&
                    blockedDate.getDate() == date.getDate()) {
                    isValid = false;
                    break;
                }
            }
        }
        return isValid;
    };
    ReservationComponent.prototype.onSubmit = function () {
        var _this = this;
        var reservationDate = new Date();
        reservationDate.setFullYear(this.model.reservationDate.year);
        reservationDate.setMonth(this.model.reservationDate.month - 1);
        reservationDate.setDate(this.model.reservationDate.day);
        var entryDate = new Date();
        var reservationDetail = new dates_service_1.NewReservationDetail();
        reservationDetail.entryDate = entryDate.getTime() / 1000;
        reservationDetail.mobileNumber = this.model.mobile;
        reservationDetail.name = this.model.name;
        reservationDetail.remarks = this.model.remarks;
        reservationDetail.email = this.model.email;
        reservationDetail.reservationDate = reservationDate.getTime() / 1000;
        reservationDetail.status = 0;
        this.dateService.reserveDate(reservationDetail)
            .then(function (confirmedInfo) {
            var confirmedReservation = confirmedInfo;
            _this.reservedDate = new Date(confirmedReservation.reservationDate * 1000).toDateString();
            alert("Request submitted! Date: " + _this.reservedDate);
            _this.submitted = true;
        });
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'reservation',
            templateUrl: 'app/reservation.component.html'
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbDatepickerConfig, dates_service_1.DateService])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=reservation.component.js.map