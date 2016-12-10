/**
 * Created by alexy on 1/12/2016.
 */
import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {BlockedDate} from './blockedDate';

// const
const serverAddress = 'http://alexyap1205-001-site3.gtempurl.com/service/';
const blockedDatesUrl = serverAddress + 'api/reservation/blocked/';
const reserveUrl = serverAddress + 'api/reservation/request';

export class NewReservationDetail {
    public name:string;
    public email: string;
    public mobileNumber: string;
    public remarks: string;
    public reservationDate: number;
    public entryDate: number;
    public status: number;
}

@Injectable()
export class DateService{
    constructor(private http: Http){
    }

    getBlockDates(day: Date) : Promise<Date[]> {
        let url = blockedDatesUrl + day.getFullYear() + '/' + (day.getMonth() + 1) + '/4';
        console.debug('calling ' + url);
        return this.http.get(url).toPromise()
            .then(response => {
                let dates: Date[] = [];
                let blockedDates = response.json() as BlockedDate[];
                for (var blockedDate of blockedDates)
                {
                    dates.push(new Date(blockedDate.date * 1000));
                }

                return dates as Date[];
            })
            .catch(this.handleError);
    }

    reserveDate(detail: NewReservationDetail): Promise<any> {
        console.debug('calling ' + reserveUrl);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(detail);
        return this.http.post(reserveUrl, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {
        let confirmedDetail = res.json()as NewReservationDetail;
        return confirmedDetail;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}