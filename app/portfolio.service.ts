import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Set} from './set';

// const
const serverAddress = 'http://alexyap1205-001-site3.gtempurl.com/service/';
const featuredPortfolioUrl = serverAddress + 'api/portfolio/featured';
const setItemHeaderUrl = serverAddress + 'api/portfolio/item/';

@Injectable()
export class PortfolioService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){
    }

    getFeatured() : Promise<Set[]>{
        console.debug('calling ' + featuredPortfolioUrl);
        return this.http.get(featuredPortfolioUrl).toPromise()
            .then(response => {
                return response.json() as Set[];
            })
            .catch(this.handleError);
    }

    getItem(id: string) : Promise<Set>{
        console.debug('calling ' + setItemHeaderUrl + id);
        return this.http.get(setItemHeaderUrl + id).toPromise()
            .then(response => {
                return response.json() as Set;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}