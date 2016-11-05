/**
 * Created by alexy on 3/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Set } from './set';
import { PortfolioService } from './portfolio.service';

@Component({
    selector: 'featured',
    templateUrl: 'app/featured-set.component.html'
})

export class FeaturedComponent implements OnInit {
    sets: Set[] = [];

    constructor(private portfolioService: PortfolioService, private router: Router){

    }

    ngOnInit(): void{
        // this.portfolioService.getFeatured()
        //     .then(sets => this.sets = sets.slice(1, 9));
    }
}
