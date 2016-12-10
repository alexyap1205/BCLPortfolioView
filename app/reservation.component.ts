/**
 * Created by alexy on 20/11/2016.
 */
import {Component} from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Reservation} from './reservation';
import {DateService, NewReservationDetail} from './dates.service';

@Component({
    selector: 'reservation',
    templateUrl: 'app/reservation.component.html'
})

export class ReservationComponent {
    model: Reservation;
    blockedDates: Date[];
    currentMonth: Date;
    blockedDatesTuple: [string, Date[]];
    reservedDate: string;
    submitted = false;

    constructor(config: NgbDatepickerConfig, private dateService: DateService){
        let initialDate = new Date();
        initialDate.setDate(initialDate.getDate() + 3);

        this.initializeBlockedDates(initialDate);

        config.minDate = {year: initialDate.getFullYear(), month: initialDate.getMonth() + 1, day: 1};
        let maxYear = initialDate.getFullYear();
        let maxMonth = initialDate.getMonth() + 1;
        if (maxMonth == 12)
        {
            maxYear = maxYear + 1;
            maxMonth = 3;
        }
        config.maxDate = {year: maxYear, month: maxMonth, day: initialDate.getDate()};

        do
        {
            initialDate.setDate(initialDate.getDate() + 1);
        } while( (!this.isValidDate(initialDate)))


        this.model = new Reservation({year: initialDate.getFullYear(), month: initialDate.getMonth() + 1, day: initialDate.getDate()},
        "", "", "", "");

        // weekends are disabled
        config.markDisabled = (date: NgbDateStruct) => {
            const d = new Date(date.year, date.month - 1, date.day);
            return !this.isValidDate(d);
        };
    }

    initializeBlockedDates (date:Date): void{
        this.dateService.getBlockDates(date)
            .then(dates => {
                this.blockedDates = dates as Date[];
            });
        this.currentMonth = date;


    }

    isValidDate (date: Date):boolean {

        let isValid = true;
        let initialDate = new Date();
        initialDate.setDate(initialDate.getDate() + 3);

        if (date.getDay() == 0){
            isValid = false;
        }
        else if (date.getTime() < initialDate.getTime()){
            isValid = false;
        }
        else if (this.blockedDates != undefined){
            for (var blockedDate of this.blockedDates){
                if (blockedDate.getFullYear() == date.getFullYear() &&
                    blockedDate.getMonth() == date.getMonth() &&
                    blockedDate.getDate() == date.getDate()){
                    isValid = false;
                    break;
                }
            }
        }

        return isValid;
    }

    onSubmit()
    {
        let reservationDate = new Date();
        reservationDate.setFullYear(this.model.reservationDate.year);
        reservationDate.setMonth(this.model.reservationDate.month - 1);
        reservationDate.setDate(this.model.reservationDate.day);
        let entryDate = new Date();

        let reservationDetail = new NewReservationDetail();
        reservationDetail.entryDate = entryDate.getTime() / 1000;
        reservationDetail.mobileNumber = this.model.mobile;
        reservationDetail.name = this.model.name;
        reservationDetail.remarks = this.model.remarks;
        reservationDetail.email = this.model.email;
        reservationDetail.reservationDate = reservationDate.getTime() / 1000;
        reservationDetail.status = 0;

        this.dateService.reserveDate(reservationDetail)
            .then(confirmedInfo =>
            {
                let confirmedReservation = confirmedInfo as NewReservationDetail;
                this.reservedDate = new Date(confirmedReservation.reservationDate * 1000).toDateString();
                alert("Request submitted! Date: " + this.reservedDate);
                this.submitted = true;
            });

    }
}