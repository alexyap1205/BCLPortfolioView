import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Set} from './set';

// const
const serverAddress = 'http://localhost:5000/';
const featuredPortfolioUrl = serverAddress + 'api/portfolio/featured';

@Injectable()
export class PortfolioService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){
    }

    getFeatured() : Promise<Set[]>{
        return this.http.get(featuredPortfolioUrl).toPromise()
            .then(response => response.json() as Set[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}