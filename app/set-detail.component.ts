/**
 * Created by alexy on 8/11/2016.
 */
import {Component, OnInit, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {PortfolioService} from './portfolio.service';
import {Set} from './set';

@Component({
    selector: 'set-detail',
    templateUrl: 'app/set-detail.component.html',
    styleUrls: ['css/bootstrap.min.css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,700,400italic', 'css/font-awesome.min.css',
        'css/owl.carousel.css', 'css/owl.theme.css', 'css/style.default.css', 'css/custom.css']
})
export class SetDetailComponent implements OnInit{
    @Input()
    id: string;

    set: Set;

    constructor(private portfolioService: PortfolioService, config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = true;
    }

    ngOnInit(): void{
        this.portfolioService.getItem(this.id)
            . then(set => {
                this.set = set;
            });
    }

}