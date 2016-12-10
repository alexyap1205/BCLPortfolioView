import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Reservation
{

    constructor(public reservationDate: NgbDateStruct,
                public name: string,
                public email: string,
                public mobile: string,
                public remarks: string
    ){

    }
}
